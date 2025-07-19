import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [showIndex, setShowIndex] = useState(null); // Track index of post to show
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

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

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const togglePost = (index) => {
    setShowIndex(showIndex === index ? null : index);
  };

  const appStyle = {
    backgroundColor: darkMode ? "#121212" : "#fff",
    color: darkMode ? "#fff" : "#000",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial",
  };

  const buttonStyle = {
    padding: "6px 10px",
    margin: "0 0 10px 10px",
    cursor: "pointer",
  };

  return (
    <div style={appStyle}>
      <button onClick={() => setDarkMode(!darkMode)} style={buttonStyle}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1>Posts</h1>

      <input
        type="text"
        placeholder="Search posts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "5px", width: "200px" }}
      />

      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>
                <button onClick={() => togglePost(index)} style={buttonStyle}>
                  {showIndex === index ? "Hide" : "Show"} Post
                </button>
                {showIndex === index && <p>{item.body}</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
