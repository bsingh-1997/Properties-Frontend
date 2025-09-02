import React, { useState } from "react";
import axios from "axios";

const AddProperty = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    location: "",
    description: "",
    image: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    console.log("Sending data:", formData); 
    const res = await axios.post("https://properties-backend-eight.vercel.app/api/properties", {
      ...formData,
      price: Number(formData.price),
    });
    console.log("Response:", res.data); 
    alert("Property added successfully!");
    setFormData({
      name: "",
      type: "",
      price: "",
      location: "",
      description: "",
      image: "",
    });
    if (onAdd) onAdd();
  } catch (error) {
    console.error("Error adding property:", error.response || error.message);
    alert("Failed to add property. Check console for details.");
  }
};




  return (
    <div style={{ padding: "20px" , width:'40%' }}>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px", maxWidth: "400px" }}>
        <input
          type="text"
          name="name"
          placeholder="Property Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Type (Apartment, House, Farms, Villa)"
          value={formData.type}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{backgroundColor:'#1877F2', color:"white", borderRadius:'5px'}}>Submit</button>
      </form>
    </div>
  );
};

export default AddProperty;



