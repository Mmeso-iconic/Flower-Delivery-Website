import "./product.css";
import { useParams } from "react-router-dom";
import { addToCart } from "../api";
import { useEffect, useState } from "react";
import { getFlowers, IMAGE_BASE_URL } from "../api";
import RattanGrapefruit from "../assets/RattanGrapefruit.webp";
import LimeMatcha from "../assets/Limematcha.webp";
import CedarLavender from "../assets/CedarLavender.webp";
import Oceanmist from "../assets/Oceanmist.webp";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Fetch product by ID
  useEffect(() => {
    getFlowers()
      .then((res) => {
        const data = res.data;

        // Flatten categories into one array safely
        let allProducts = [];
        Object.values(data).forEach((category) => {
          allProducts = allProducts.concat(category);
        });

        const found = allProducts.find((item) => item._id === id);
        setProduct(found || null);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  // ⭐ FIXED handleAddToCart
  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");

    console.log('Add to cart clicked. Quantity:', quantity, 'Product ID:', product._id);

    // Guest user → localStorage with full product details
    if (!token) {
      const guestCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = guestCart.find(item => item._id === product._id);
      
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        guestCart.push({
          _id: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity
        });
      }
      
      localStorage.setItem("cart", JSON.stringify(guestCart));
      alert("Added to cart!");
      return;
    }

    // Logged-in user → backend
    try {
      console.log('Sending to backend:', { flowerId: product._id, quantity });
      const response = await addToCart(product._id, quantity, token);
      console.log('Backend response:', response.data);
      alert("Added to cart!");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Could not add to cart");
    }
  };

  return (
    <div className="Product-Container page-container">
      <div className="product-intro">
        <div className="productheroimg">
          <img
            src={
              product.image
                ? `${IMAGE_BASE_URL}/${product.image}`
                : "/assets/AromaCandles.png"
            }
            alt={product.name || "No image available"}
          />
        </div>

        <div className="product-info">
          <p className="About-minititle">
            {product.category || "Flowers"} / Quick Order
          </p>

          <h3 className="productpage-title">
            {product.name} - ${product.price}
          </h3>

          <p className="productpage-description">
            {product.description || "No description available."}
          </p>

          {/* Quantity Selector */}
          <div className="productpage-quantity">
            <label htmlFor="quantity">Quantity</label>

            <div className="quantity-controls">
              <button
                className="qty-btn btn1"
                id="decrease"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                −
              </button>

              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />

              <button
                className="qty-btn btn2"
                id="increase"
                onClick={() => setQuantity((prev) => Math.min(10, prev + 1))}
              >
                +
              </button>
            </div>
          </div>

          {/* ADD TO CART BUTTON */}
          <div className="productpage-addtocart">
            <button
              className="addto-btn"
              type="button"
              onClick={handleAddToCart}
            >
              ADD TO BASKET
            </button>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="may-alsolike">
        <h3>You may also like...</h3>
      </div>

      <div className="mayalsolike-products">
        <div className="mayalsolike-product">
          <img className="morelike-img" src={RattanGrapefruit} alt="Diffuser" />
          <div className="product-overlay">
            <p className="morelike-name">Rattan Grapefruit</p>
            <p className="morelike-price">$48.00</p>
          </div>
        </div>

        <div className="mayalsolike-product">
          <img className="morelike-img" src={LimeMatcha} alt="Diffuser" />
          <div className="product-overlay">
            <p className="morelike-name">Lime & Matcha</p>
            <p className="morelike-price">$46.99</p>
          </div>
        </div>

        <div className="mayalsolike-product">
          <img className="morelike-img" src={CedarLavender} alt="Diffuser" />
          <div className="product-overlay">
            <p className="morelike-name">Cedar & Lavender</p>
            <p className="morelike-price">$64.00</p>
          </div>
        </div>

        <div className="mayalsolike-product">
          <img className="morelike-img" src={Oceanmist} alt="Diffuser" />
          <div className="product-overlay">
            <p className="morelike-name">Ocean Mist</p>
            <p className="morelike-price">$58.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
