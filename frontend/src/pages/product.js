import './product.css';
import { useParams } from "react-router-dom";
import { addToCart } from "../utils/cartUtils";
import { useEffect, useState } from "react";
import { getFlowers, IMAGE_BASE_URL } from "../api";
import { useNavigate } from "react-router-dom";
import RattanGrapefruit from "../assets/RattanGrapefruit.webp";
import LimeMatcha from "../assets/Limematcha.webp";
import CedarLavender from "../assets/CedarLavender.webp";
import Oceanmist from "../assets/Oceanmist.webp";


function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getFlowers()
      .then((res) => {
        const data = res.data;

        // Flatten categories into one array safely
        let allProducts = [];
        Object.values(data).forEach((category) => {
          allProducts = allProducts.concat(category);
        });

        // Find product by its _id
        const found = allProducts.find((item) => item._id === id);

        setProduct(found || null);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) {
    return <h1>Product not found</h1>;
  }


const handleAddToCart = () => {
  addToCart(product, quantity);
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

                    <div className="productpage-quantity">
                        <label htmlFor="quantity">Quantity</label>
                        <div className="quantity-controls">
                            <button className="qty-btn btn1" id="decrease" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
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
                            <button className="qty-btn  btn2" id="increase" onClick={() => setQuantity((prev) => Math.min(10, prev + 1))}>
                                +
                            </button>
                        </div>
                    </div>

                    <div className="productpage-addtocart">
                        <button className="addto-btn " type="button" onClick={handleAddToCart}>
                            ADD TO BASKET
                        </button>
                    </div>
                </div>
            </div>

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
