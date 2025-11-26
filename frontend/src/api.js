import axios from "axios";

export const BASE_URL =
  process.env.REACT_APP_API_URL_BASE ||
  "https://flower-delivery-website-backend-afo4.onrender.com";

export const IMAGE_BASE_URL = `${BASE_URL}/images`;

export const getFlowers = () => axios.get(`${BASE_URL}/api/flowers`);

// add to cart (logged in users)
export const addToCart = (flowerId, quantity, token) =>
  axios.post(
    `${BASE_URL}/api/cart`,
    { flowerId, quantity },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

export const getCartItems = (token) => {
  return axios.get(`${BASE_URL}/api/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const mergeCart = (items, token) =>
  axios.post(
    `${BASE_URL}/api/cart/merge`,
    { items },
    { headers: { Authorization: `Bearer ${token}` } }
  );

