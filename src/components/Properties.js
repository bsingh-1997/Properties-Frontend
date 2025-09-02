


import React, { useState } from "react";

const Properties = ({ properties, onSelect }) => {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");

  //filtering prpties
  const filtered = properties.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType ? p.type === filterType : true;
    return matchesSearch && matchesType;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Property Listings</h2>


      <input
        type="text"
        placeholder="Search by name or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* dropdown */}
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        style={{ padding: "5px" }}
      >
        <option value="">All Types</option>
        <option value="House">House</option>
        <option value="Apartment">Apartment</option>
        <option value="Villa">Villa</option>
      </select>

      {/* Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {filtered.length === 0 && (
  <p style={{ marginTop: "20px", fontWeight: "bold" }}>No properties found</p>
)}

        {filtered.map((p) => (
          <div
            key={p._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "6px",
              width: "15vw",
            //   boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
            }}
          >
            <h3>{p.name}</h3>
            <p><b>Type:</b> {p.type}</p>
            <p><b>Location:</b> {p.location}</p>
            <p><b>Price:</b> ${p.price}</p>

            <button 
              onClick={() => onSelect(p)} 
              style={{ marginTop: "10px", padding: "5px 10px" , backgroundColor:'#1877F2', color:"white", borderRadius:'5px' }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
