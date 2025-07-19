import React, { useEffect, useState } from "react";
import axios from "axios";
const FetchData = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>

    <div>
        <h1>This is the Search Filter of the post</h1>
        <input
          type="text"
            placeholder="Search by title"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </div>
    <div>
      <h1>Fetch Data Example</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredData.map((item) => (
            <li key={item.id}>
              <h1>{item.id}</h1>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default FetchData;
