import React from "react";
import logo from "../assets/logo.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="logo-side" data-aos="fade-up">
        <img src={logo} alt="logo" />
        <p>
          Sign up for texts to be notified about our best offers on the perfect
          gifts.
        </p>
      </div>
      <ul className="list1" data-aos="fade-up">
        <li>All Products</li>
        <li>Phones</li>
        <li>Watch</li>
        <li>Tablet</li>
        <li>Laptops</li>
      </ul>
      <ul className="list2" data-aos="fade-up">
        <li>Company</li>
        <li>About</li>
        <li>Support</li>
      </ul>
      <ul className="list3" data-aos="fade-up">
        <li>Support</li>
        <li>Style Guide</li>
        <li>Licensing</li>
        <li>Cahnge Look</li>
        <li>Contacts</li>
      </ul>
      <ul className="list4" data-aos="fade-up">
        <li>Follow Us</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>LinkedIn</li>
        <li>You Tube</li>
      </ul>
    </footer>
  );
}

export default Footer;
