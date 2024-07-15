import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import "boxicons/css/boxicons.min.css";

const Home = () => {
  return (
    <div className="home-section">
      <div className="text-container">
        <h1 className="home-heading">Crafting the Future of Tech</h1>
        <h2 style={{ color: "grey" }}>Login to explore more features</h2>

        <Link to="/loginPage" className="login-link">
          <button className="home-login-btn">Login</button>
        </Link>
      </div>

      <div className="contact-container">
        <i id="icons" className="bx bxl-instagram"></i>
        <i id="icons" className="bx bxl-whatsapp-square"></i>
        <i id="icons" className="bx bxl-github"></i>
      </div>
    </div>
  );
};

export default Home;
