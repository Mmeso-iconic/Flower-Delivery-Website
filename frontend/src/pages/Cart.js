import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, IMAGE_BASE_URL } from "../api";
import "./cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const fetchCart = async () => {
    const currentToken = localStorage.getItem("token");

    // Logged-in user → fetch from backend
    if (currentToken) {
      try {
        const res = await axios.get(`${BASE_URL}/api/cart`, {
          headers: { Authorization: `Bearer ${currentToken}` },
        });

        console.log("Cart fetched from backend:", res.data);
        setCartItems(res.data.items || []);
      } catch (error) {
        console.error("Error fetching cart:", error);

        // If token is invalid (401), clear it and fallback to guest cart
        if (error.response?.status === 401) {
          console.warn(
            "Token invalid or expired, clearing auth and using guest cart"
          );
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setToken(null);

          // Fallback to guest cart
          const guestCart = JSON.parse(localStorage.getItem("cart")) || [];
          setCartItems(guestCart);
        }
      }
    } else {
      // Guest → localStorage
      const guestCart = JSON.parse(localStorage.getItem("cart")) || [];
      console.log("Using guest cart:", guestCart);
      setCartItems(guestCart);
    }
  };

  const clearCart = async () => {
    const currentToken = localStorage.getItem("token");
      
    if (currentToken) {
      // Logged-in user - clear backend cart
      try {
        await axios.delete(`${BASE_URL}/api/cart`, {
          headers: { Authorization: `Bearer ${currentToken}` },
        });
        localStorage.removeItem('cart');
        setCartItems([]);
        console.log('Cart cleared from backend');
        alert('Cart cleared!');
      } catch (error) {
        console.error('Error clearing cart:', error);
        alert('Failed to clear cart');
      }
    } else {
      // Guest - clear localStorage
      localStorage.removeItem('cart');
      setCartItems([]);
      alert('Cart cleared!');
    }
  };

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // --- NEW: Calculate Subtotal for the Summary Panel ---
  const subtotal = cartItems.reduce((acc, item) => {
    const price = item.price || item.flower?.price || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="cart-container page-container">
      <h1 className="cart-title">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-content">
            {cartItems.map((item, index) => {
              // Image Logic
              let imageSrc = "";
              if (item.flower?.image) {
                imageSrc = `${IMAGE_BASE_URL}/${item.flower.image}`;
              } else if (item.image) {
                imageSrc = item.image.startsWith("http")
                  ? item.image
                  : `${IMAGE_BASE_URL}/${item.image}`;
              }
              
              const price = item.price || item.flower?.price || 0;

              return (
                <div className="cart-item" key={item._id || item.flower?._id || index}>
                  {imageSrc && (
                    <img
                      src={imageSrc}
                      alt={item.name || item.flower?.name}
                    />
                  )}
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">
                      {item.name || item.flower?.name}
                    </h3>
                    <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                  </div>
                  <div className="cart-item-price">${price.toFixed(2)}</div>
                </div>
              );
            })}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span className="summary-total">Subtotal</span>
              <span className="summary-total">${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at next step</span>
            </div>
            
            <div className="summary-row">
              <span className="summary-total">Total</span>
              <span className="summary-total">${subtotal.toFixed(2)}</span>
            </div>

            <button className="continue-btn">Continue to Payment</button>
            
            <button 
              onClick={clearCart}
              style={{
                marginTop: '10px',
                padding: '10px',
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%'
              }}
            >
              Clear Cart (Test)
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;