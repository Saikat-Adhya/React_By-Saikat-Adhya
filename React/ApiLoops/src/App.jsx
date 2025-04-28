import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Propss from "./components/Propss";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
    <Propss name="Dodo"/>
    <br />
    <br />
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🛒 Product List</h1>
      {products.length === 0 ? (
        <p>Loading products... ⏳</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "left",
              }}
            >
              <img src={product.thumbnail} alt={product.title} style={{ width: "100%", borderRadius: "5px" }} />
              <h3>{product.title}</h3>
              <p>💰 Price: ${product.price}</p>
              <p>⭐ Rating: {product.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    <br /> 
    <br />
    {/* <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Links</li>
          <li>Contact</li>
        </ul>
      </nav>
        
    </div> */}
    <div>
      <Card />
    </div>
    <Propss name="Saikat"/>
    </>
  );
}

export default App;
