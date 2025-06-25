import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: "#333",
    padding: "1rem 2rem",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
  };

  const ulStyle = {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: 500,
  };

  const hoverStyle = {
    textDecoration: "underline",
    color: "#ffcc00",
  };

  return (
    <div style={navbarStyle}>
      <div style={titleStyle}>This is our Navbar</div>
      <nav>
        <ul style={ulStyle}>
          <li>
            <Link
              to="/"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style.color = hoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
