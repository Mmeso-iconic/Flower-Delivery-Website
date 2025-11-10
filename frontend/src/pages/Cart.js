import "./cart.css";
import { useEffect, useState } from "react";
import { getCartItems } from "../api"; // replace with your actual API
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

useEffect(() => {
  getCartItems()
    .then((res) => {
      console.log("Cart API response:", res.data); // <-- check this
      setCartItems(Array.isArray(res.data) ? res.data : []);
    })
    .catch((err) => console.error("Error fetching cart:", err));
}, []);

  // Safely calculate subtotal even if cartItems is not an array
  const subtotal = (Array.isArray(cartItems) ? cartItems : []).reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  const handleContinue = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container page-container">
      <h2 className="cart-title">Your Basket</h2>

      {(!Array.isArray(cartItems) || cartItems.length === 0) ? (
        <p className="empty-cart">Your basket is empty.</p>
      ) : (
        <div className="cart-content">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-quantity">
                  Quantity: <span>{item.quantity}</span>
                </p>
              </div>
              <p className="cart-item-price">${item.price}</p>
            </div>
          ))}

          <div className="cart-summary">
            <div className="summary-row">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="summary-row">
              <p>Shipping</p>
              <p>Calculated at next step</p>
            </div>
            <div className="summary-total">
              <p>Total</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>

            <button className="continue-btn" onClick={handleContinue}>
              CONTINUE TO PAYMENT
            </button>

            <p className="secure-checkout">Secure Checkout 🔒</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
