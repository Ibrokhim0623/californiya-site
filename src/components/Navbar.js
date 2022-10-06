import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="navbar" data-aos="fade-down">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={menu ? "nav-right" : "rightSide"}>
          <ul className="nav-list">
            <li className="nav-items" onClick={() => setMenu(false)}>
              <Link to="/" className="nav-links">
                all products
              </Link>
            </li>
            <li className="nav-items" onClick={() => setMenu(false)}>
              <Link to="/solutions" className="nav-links">
                Solutions
              </Link>
            </li>
            <li className="nav-items" onClick={() => setMenu(false)}>
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-items" onClick={() => setMenu(false)}>
              <Link to="/contact" className="nav-links">
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-icons">
            <div className="nav-search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="nav-cart-icon">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        </div>
        <button className="toggle" onClick={() => setMenu(!menu)}>
          {menu ? (
            <i className="fas fa-times"></i>
          ) : (
            <i class="fa-solid fa-bars"></i>
          )}
        </button>
      </nav>

    </>
  );
}

export default Navbar;
