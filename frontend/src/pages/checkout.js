import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

const BASE_URL = process.env.REACT_APP_API_URL_BASE || "https://flower-delivery-website-backend-afo4.onrender.com";
const IMAGE_BASE_URL = `${BASE_URL}/images`;

const stripePromise = loadStripe("pk_test_51SXhCQAdQiN3rQ2ZCb3YLYgOHugefRq63NDcK3BoVhD8BdJTqLxYSRx9q6QeOTiWgU9THdsABoETdyQVcFJ4RMUw00O9M6uLtC");

// --------------------
// Checkout Form Component
// --------------------
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [contact, setContact] = useState("");
  const [shipping, setShipping] = useState({
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("token");
      
      if (token) {
        // Logged-in user - fetch from backend
        try {
          const response = await fetch(`${BASE_URL}/api/cart`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          
          if (response.ok) {
            const res = await response.json();
            // Transform backend cart items to match expected format
            const cartItems = res.items?.map(item => ({
              _id: item.flower?._id || item._id,
              name: item.flower?.name || item.name,
              price: item.flower?.price || item.price || 0,
              quantity: item.quantity || 1,
              image: item.flower?.image ? `${IMAGE_BASE_URL}/${item.flower.image}` : item.image || ''
            })) || [];
            
            setCart(cartItems);
          } else {
            // If backend request fails, fallback to localStorage
            console.error('Failed to fetch cart from backend, falling back to localStorage');
            const localCart = JSON.parse(localStorage.getItem("cart")) || [];
            setCart(localCart);
          }
        } catch (error) {
          console.error("Error fetching cart:", error);
          // Fallback to localStorage
          const localCart = JSON.parse(localStorage.getItem("cart")) || [];
          setCart(localCart);
        }
      } else {
        // Guest user - use localStorage
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];
        // Ensure guest cart items are in the same format as backend items
        const formattedCart = localCart.map(item => {
          // Handle both formats: direct product properties and {flowerId, quantity} format
          if (item.flowerId) {
            // Format from addToGuestCart: {flowerId, quantity}
            return {
              _id: item.flowerId,
              name: item.name || 'Unknown Product',
              price: item.price || 0,
              quantity: item.quantity || 1,
              image: item.image || ''
            };
          } else {
            // Format from addToCart: direct product properties
            return {
              _id: item._id || item.id,
              name: item.name || item.flower?.name || 'Unknown Product',
              price: item.price || item.flower?.price || 0,
              quantity: item.quantity || 1,
              image: item.image || item.flower?.image || ''
            };
          }
        });
        setCart(formattedCart);
      }
    };
    
    fetchCart();
  }, []);

  const subtotal = cart.reduce((s, i) => s + (i.price || 0) * (i.quantity || 1), 0);
  const shippingFee = 0;
  const total = subtotal + shippingFee;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    try {
      // 1. Create PaymentIntent on backend
      const response = await fetch(`${BASE_URL}/api/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total * 100 }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Payment creation failed" }));
        throw new Error(errorData.error || "Payment creation failed");
      }
      
      const { clientSecret } = await response.json();

      // 2. Confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: contact,
            address: {
              line1: shipping.address,
              city: shipping.city,
              state: shipping.state,
              postal_code: shipping.postalCode,
            },
          },
        },
      });

      if (result.error) {
        alert(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          // Clear the cart after successful payment
          const token = localStorage.getItem("token");
          if (token) {
            // Clear backend cart for logged-in user
            try {
              const clearResponse = await fetch(`${BASE_URL}/api/cart`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
              });
              
              if (!clearResponse.ok) {
                console.error('Failed to clear backend cart:', await clearResponse.text());
              }
            } catch (error) {
              console.error("Error clearing backend cart after purchase:", error);
            }
          } else {
            // Clear localStorage cart for guest user
            localStorage.removeItem("cart");
          }
          
          // Reset cart state
          setCart([]);
          
          // Show success message and navigate to home
          alert("Payment Successful!");
          navigate('/');
        }
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed: ' + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h3>Contact Information</h3>
        <input
          type="email"
          placeholder="Email address"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />

        <h3>Shipping Details</h3>
        <input
          type="text"
          placeholder="Address"
          value={shipping.address}
          onChange={(e) => setShipping({ ...shipping, address: e.target.value })}
          required
        />

        <div className="two-cols">
          <input
            type="text"
            placeholder="City"
            value={shipping.city}
            onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="State"
            value={shipping.state}
            onChange={(e) => setShipping({ ...shipping, state: e.target.value })}
            required
          />
        </div>

        <input
          type="text"
          placeholder="Postal Code"
          value={shipping.postalCode}
          onChange={(e) =>
            setShipping({ ...shipping, postalCode: e.target.value })
          }
          required
        />

        <h3>Payment Details</h3>
        <div className="card-box">
          <CardElement />
        </div>

        <button
          className="purchase-btn"
          onClick={handleSubmit}
          disabled={!stripe || loading}
        >
          {loading ? "PROCESSING..." : "MAKE A PURCHASE"}
        </button>
      </div>

      <div className="checkout-right">
        <h3>Order Summary</h3>

        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map((item, index) => (
            <div className="summary-item" key={index}>
              <img src={item.image} alt="" />
              <div>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))
        )}

        <div className="summary-totals">
          <div>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>${shippingFee.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// --------------------
// Wrap Form inside Elements (Stripe requirement)
// --------------------
const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;
