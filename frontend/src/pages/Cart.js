import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, IMAGE_BASE_URL } from "../api";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart({ onRequireSignin }) {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

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

  const handleContinueToPayment = async () => {
    const currentToken = localStorage.getItem("token");
    
    if (currentToken) {
      // Verify token is valid by trying to fetch cart
      try {
        await axios.get(`${BASE_URL}/api/cart`, {
          headers: { Authorization: `Bearer ${currentToken}` },
        });
        
        // Token is valid, proceed to checkout
        navigate('/checkout');
      } catch (error) {
        // Token is invalid or expired
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          
          // Show sign-in modal
          if (onRequireSignin) {
            onRequireSignin();
          } else {
            alert('Please sign in to continue to checkout');
          }
        } else {
          // Other error, proceed anyway
          navigate('/checkout');
        }
      }
    } else {
      // User is not logged in, trigger sign-in modal
      if (onRequireSignin) {
        onRequireSignin();
      } else {
        alert('Please sign in to continue to checkout');
      }
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
    <div className="cart-grid page-container">
      
      {/* --- LEFT COLUMN: Cart Items --- */}
      <div className="cart-items-section">
        <h1>Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-state">
            <p>Your cart is empty.</p>
          </div>
        ) : (
          <>
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
              const name = item.name || item.flower?.name || 'Unknown Product';

              return (
                <div className="cart-item" key={item._id || item.flower?._id || index}>
                  <div className="cart-item-image">
                    {imageSrc && (
                      <img
                        src={imageSrc}
                        alt={name}
                      />
                    )}
                  </div>
                  <div className="cart-item-details">
                    <h3 className="item-name">
                      {name}
                    </h3>
                    <p className="item-qty">Quantity: {item.quantity}</p>
                  </div>
                  <div className="cart-item-price">${price.toFixed(2)}</div>
                </div>
              );
            })}
            
            <button className="text-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>

      {/* --- RIGHT COLUMN: Summary & Checkout --- */}
      <div className="cart-summary-section">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span className="calculated-text">Calculated at next step</span>
        </div>
        
        <div className="summary-divider"></div>

        <div className="summary-row total">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <button className="btn checkout-btn" onClick={handleContinueToPayment}>
          Continue to Payment
        </button>

        <div className="secure-badge">
          <span role="img" aria-label="lock">🔒</span> Secure Checkout
        </div>
      </div>
    </div>
  );
}

export default Cart;