import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/login`, data)
      .then((response) => {
        console.log("Login successful:", response.data);
        localStorage.setItem("userToken", response.data.token); // Store user ID or token
        navigate("/"); // Redirect to home page after successful login
      })
      .catch((error) => {
        console.error(
          "Error logging in:",
          error.response?.data || error.message
        );
        alert("Login failed. Please check your credentials.");
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
};

export default Login;
