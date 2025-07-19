import React, { useState } from "react";

const Registration = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", data);
    // Here you can handle the form submission, e.g., send data to an API
    // Reset the form after submission if needed
    localStorage.setItem("email", data.email);
    alert(`Email: ${data.email}`);
    // Reset the form fields
    setData({ name: "", email: "" });
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          placeholder="Enter your name"
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <br />
        <button type="submit">Submit Me!!</button>
      </form>
    </div>
  );
};

export default Registration;
