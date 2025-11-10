import axios from "axios";

export const BASE_URL = process.env.REACT_APP_API_URL_BASE || "https://flower-delivery-website-backend-afo4.onrender.com"; // <-- export added

const API_URL = `${BASE_URL}/api/flowers`;

export const getFlowers = () => axios.get(API_URL);

// export the base for images
export const IMAGE_BASE_URL = `${BASE_URL}/images`;

export const addToCart = (payload) => {
  return axios.post(`${BASE_URL}/api/cart`, payload);
};

export const getCartItems = async () => {
  const response = await axios.get(`${BASE_URL}/api/cart`);
  return response;
};
