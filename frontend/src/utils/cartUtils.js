// src/utils/cartUtils.js
export const addToCart = (product, quantity = 1) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = storedCart.find((item) => item._id === product._id);

  let updatedCart;

  if (existingItem) {
    updatedCart = storedCart.map((item) =>
      item._id === product._id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    updatedCart = [...storedCart, { ...product, quantity }];
  }

  localStorage.setItem("cart", JSON.stringify(updatedCart));
  alert("Added to basket!");
};

export const getCartItems = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};
