
import logo from './logo.svg';
import './App.css';
import Properties from './components/Properties';
import AddProperty from './components/AddProperty';
import ViewDetails from './components/ViewDetails';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  // fetching backend data
  const fetchData = async () => {
    try {
      const res = await axios.get("https://properties-backend-eight.vercel.app/api/properties");
      setProperties(res.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ width: '80%', margin: '5vh auto' }}>
      <div style={{ display:'flex', justifyContent:'space-between', height:'5vh', alignItems:'center' }}>
        <h3>Mini Property Listing Dashboard</h3>
        <button style={{backgroundColor:'#1877F2', color:"white", borderRadius:'5px'}} onClick={() => setShowAdd(!showAdd)}>{!showAdd?<>Add Property</>:"Close"}</button>
      </div>

      <Properties 
        properties={properties} 
        onSelect={(p) => setSelectedProperty(p)} 
      />
      
      <div style={{ display:'flex'}}>

      {showAdd && <AddProperty onAdd={fetchData} />}

      {selectedProperty && (
        <ViewDetails 
        property={selectedProperty} 
        onClose={() => setSelectedProperty(null)} 
        />
      )}
      </div>


    </div>
  );
}

export default App;
