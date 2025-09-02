import React from "react";

const ViewDetails = ({ property, onClose }) => {
    if (!property) return null;

    return (
        <div
            style={{
                // marginTop: "30px",
                padding: "0px 20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                background: "#fafafa",
                width: '60%',
                margin: 'auto'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4vh' }}><h3>View Details</h3> <div onClick={onClose} style={{ cursor: 'pointer' }} >x</div></div>
            <div style={{ display: 'flex', gap: '2vw' }}>
                {/* imagecont */}
                <div style={{ width: '50%' }}>
                    {property.image && (
                        <img
                            src={property.image}
                            alt={property.name}
                            style={{ width: "100%", maxWidth: "500px", borderRadius: "8px", marginTop: "10px" }}
                        />
                    )}
                </div>
                {/* datacont */}
                <div style={{ width: '40%' }}>
                    <h2>{property.name}</h2>
                    <p><b>Type:</b> {property.type}</p>
                    <p><b>Location:</b> {property.location}</p>
                    <p><b>Price:</b> ${property.price}</p>
                    {/* <p><b>Description:</b> {property.description}</p> */}
                </div>



            </div>
            <p><b>Description:</b> {property.description}</p>


            <br />
            <hr />



            <div style={{ display: 'flex', justifyContent: 'flex-end' }} >

                <button onClick={onClose} style={{ backgroundColor: '#1877F2', color: 'white', marginTop: "10px", padding: "5px 10px", width: '8vw' }}>
                    Close
                </button>
            </div>



        </div>
    );
};

export default ViewDetails;
