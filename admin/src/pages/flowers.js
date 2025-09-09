import React, { useEffect, useState } from "react";
import "./flowers.css";
import Footer from "../components/footer.js";

function Flowers() {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:3000/api/flowers";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const combinedFlowers = Object.values(data).flat();

        const flowersWithFullImages = combinedFlowers.map((flower) => ({
          ...flower,
          image: flower.image
            ? `http://localhost:3000/images/${flower.image}`
            : null,
        }));

        setFlowers(flowersWithFullImages);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching flowers:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading flowers...</p>;
  if (!flowers.length) return <p>No flowers found.</p>;

  return (
    <>
      <div className="admin-panel">

        {/* Flower grid */}
        <div className="flower-list">
          {flowers.map((flower, index) => (
            <div className="flower-card" key={index}>
              <div className="flower-image">
                {flower.image ? (
                  <img src={flower.image} alt={flower.name} />
                ) : (
                  <span>Flower Image {index + 1}</span>
                )}
              </div>
              <div className="flower-details">
                <p><strong>Name:</strong> {flower.name}</p>
                <p><strong>Category:</strong> {flower.category}</p>
                <p><strong>Price:</strong> ${flower.price}</p>
                <p>
                  <strong>Description:</strong> {flower.description || "No description"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Flowers;
