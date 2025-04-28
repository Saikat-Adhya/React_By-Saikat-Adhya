import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import Navbar
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar added here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
