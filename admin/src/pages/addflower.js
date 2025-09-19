import React, { useState } from "react";
import axios from "axios";
import "./addflower.css";
import Footer from "../components/footer.js";

const AddFlowers = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: null,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // Make request to backend
      const res = await axios.post("/api/flowers", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Flower added successfully!");
      console.log(res.data);

      // Reset form
      setFormData({
        name: "",
        category: "",
        price: "",
        description: "",
        image: null,
      });
    } catch (err) {
      console.error(err);
      alert("Error adding flower!");
    }
  };

  return (
    <>
    <div className="add-flowers-container">
        <form onSubmit={handleSubmit} className="add-flowers-form">
            <div className="form-group">
                <label>Image</label>
                <input type="file" name="image" onChange={handleChange} />
            </div>

            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter flower name"
                    required
                />
            </div>

            <div className="form-row">
                <div className="form-group half">
                    <label>Category</label>
                    <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    placeholder="Enter category"
                    required
                    />
                </div>
                <div className="form-group half">
                    <label>Price</label>
                    <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                    required
                    />
                </div>
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter description"
                ></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
        </form>
    </div>

    <Footer />
    </>
  );
};

export default AddFlowers;
