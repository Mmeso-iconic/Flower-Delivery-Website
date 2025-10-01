import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFlowers, IMAGE_BASE_URL } from "../api";
import RattanGrapefruit from "../assets/RattanGrapefruit.webp";
import LimeMatcha from "../assets/Limematcha.webp";
import CedarLavender from "../assets/CedarLavender.webp";
import Oceanmist from "../assets/Oceanmist.webp";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
        <div className="Product-Container">
            <div className="product-intro">
                <img
                src={
                    product.image
                    ? `${IMAGE_BASE_URL}/${product.image}`
                    : "/assets/AromaCandles.png"
                }
                alt={product.name || "No image available"}
                />

                <div className="product-info">
                <p className="about-minititle">
                    {product.category || "Flowers"} / Quick Order
                </p>
                <h1 className="productpage-title">
                    {product.name} - ${product.price}
                </h1>
                <p className="productpage-description">
                    {product.description || "No description available."}
                </p>

                <div className="productpage-quantity">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="10"
                    defaultValue="1"
                    />
                </div>

                <div className="productpage-addtocart">
                    <button type="button">ADD TO BASKET</button>
                </div>
                </div>
            </div>
            <div className="may-alsolike">
                <h2>You may also like...</h2>
            </div>
            <div className="mayalsolike-products">
                <div className="mayalsolike-product">
                    <img className="morelike-img" src={RattanGrapefruit} alt="Diffuser" />
                    <p className="morelike-name">Rattan Grapefruit</p>
                    <p className="morelike-price">$48.00</p>
                </div>
                <div className="mayalsolike-product">
                    <img className="morelike-img" src={LimeMatcha} alt="Diffuser" />
                    <p className="morelike-name">Lime & Matcha</p>
                    <p className="morelike-price">$46.99</p>
                </div>
                <div className="mayalsolike-product">
                    <img className="morelike-img" src={CedarLavender} alt="Diffuser" />
                    <p className="morelike-name">Cedar & Lavender</p>
                    <p className="morelike-price">$64.00</p>
                </div>
                <div className="mayalsolike-product">
                    <img className="morelike-img" src={Oceanmist} alt="Diffuser" />
                    <p className="morelike-name">Ocean Mist</p>
                    <p className="morelike-price">$58.99</p>
                </div>                
                
            </div>
        </div>
  );
}

export default Product;
