import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

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

  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(localCart);
  }, []);

  const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const shippingFee = 0;
  const total = subtotal + shippingFee;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements) return;

    // 1. Create PaymentIntent on backend
    const res = await fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total * 100 }),
    });

    const { clientSecret } = await res.json();

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
        alert("Payment Successful!");
      }
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
              <p className="price">${item.price * item.quantity}</p>
            </div>
          ))
        )}

        <div className="summary-totals">
          <div>
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>${shippingFee}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${total}</span>
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
