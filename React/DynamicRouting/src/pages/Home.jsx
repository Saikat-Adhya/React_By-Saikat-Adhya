import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <NavLink to={`/show/${item.id}`}>
            <button>Show Data</button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Home;
