import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFlowers, IMAGE_BASE_URL } from "../api";

function Category() {
  // This gives us the category name from the URL (e.g. "fresh-flowers")
  const { categoryName } = useParams();

  // State to hold products and the title
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");

  // Convert text like "Fresh Flowers" into "fresh-flowers"
  const makeSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  // Fetch products when the page loads or when category changes
  useEffect(() => {
    getFlowers()
      .then((res) => {
        const allCategories = res.data;

        // Find the category from the backend that matches our URL
        const match = Object.keys(allCategories).find(
          (key) => makeSlug(key) === makeSlug(categoryName)
        );

        if (match) {
          setProducts(allCategories[match]); // products in that category
          setTitle(match); // show proper title like "Fresh Flowers"
        } else {
          setProducts([]);
          setTitle("Not Found");
        }
      })
      .catch((err) => console.error("Error fetching flowers:", err));
  }, [categoryName]);

  return (
    <div className="Category-Container">
      <div className="cat-herosection">
        <h1>{title}</h1>
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
              <h2 className="cat-productname">{product.name}</h2>
              <p className="cat-productdiv">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
