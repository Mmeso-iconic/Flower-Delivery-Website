// src/utils/cartUtils.js
export const addToCart = (product, quantity = 1) => {
  return new Promise((resolve) => {
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
    resolve("Added to basket!");
  });
};

export const getCartItems = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};


// Guest cart stored in localStorage
export const addToGuestCart = (flowerId, quantity = 1) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.flowerId === flowerId);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ flowerId, quantity });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};

export const getGuestCart = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const clearGuestCart = () => {
  localStorage.removeItem("cart");
};
