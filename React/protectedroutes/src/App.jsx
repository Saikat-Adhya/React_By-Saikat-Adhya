import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import ProtectRoutes from "./protect/ProtectRoutes";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<ProtectRoutes />}>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
