import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem("token");

  const fetchCart = async () => {
    // Logged-in user → fetch from backend
    if (token) {
      try {
        const res = await axios.get(`${BASE_URL}/api/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCartItems(res.data.items || []);
      } catch (error) {
        console.error("Error fetching cart:", error);
        
        // If token is invalid (401), clear it and fallback to guest cart
        if (error.response?.status === 401) {
          console.warn("Token invalid or expired, clearing auth and using guest cart");
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
      setCartItems(guestCart);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [token]); // safe

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 && <p>Your cart is empty</p>}

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id || item.flower?._id}>
          <img
            src={item.image || item.flower?.image}
            alt=""
            width={80}
            height={80}
          />

          <div>
            <h3>{item.name || item.flower?.name}</h3>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
