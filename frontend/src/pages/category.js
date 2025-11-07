import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFlowers, IMAGE_BASE_URL } from "../api";
import '../pages/category.css'

function Category() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");

  // Convert text like "Fresh Flowers" into "fresh-flowers"
  const makeSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    getFlowers()
      .then((res) => {
        const allCategories = res.data;
        const match = Object.keys(allCategories).find(
          (key) => makeSlug(key) === makeSlug(categoryName)
        );

        if (match) {
          setProducts(allCategories[match]); 
          setTitle(match); 
        } else {
          setProducts([]);
          setTitle("Not Found");
        }
      })
      .catch((err) => console.error("Error fetching flowers:", err));
  }, [categoryName]);

  return (
    <div className="Category-Container page-container">
      <div className="cat-herosection">
        <h1 className="cat-title">{title}</h1>
      </div>

      <div className="cat-productssection">
        {products.map((product) => (
          <div key={product._id} className="catdiv-product">
            <Link to={`/product/${product._id}`} className="productpage-link">
             <img
                src={
                  product.image
                    ? `${IMAGE_BASE_URL}/${product.image}`
                    : "/assets/AromaCandles.png"
                }
                alt={product.name || "No image available"}
              />
              <div className="cat-productoverlay">
                  <h6 className="cat-productname">{product.name}</h6>
                  <p className="cat-productprice">price ${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
