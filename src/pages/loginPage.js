import React, { useState } from "react";
import Register from "../components/register";
import Login from "../components/login";
import logo from "../images/logo.png";
import "./loginPage.css";
const LoginPage = () => {
  const [view, setView] = useState("login");

  return (
    <div className="login-page-container">
      <img className="logo-img" src={logo} alt="logo" />

      <div className="login-text-section">
        <nav className="login-or-register">
          <h1
            className="login-header"
            onClick={() => setView("login")}
            style={{ color: view === "login" ? "grey" : "black" }}
          >
            login
          </h1>
          <h1 style={{ fontSize: "30px" }}>/</h1>
          <h1
            className="register-header"
            onClick={() => setView("register")}
            style={{ color: view === "register" ? "grey" : "black" }}
          >
            register
          </h1>
        </nav>

        <div className="login-text-container">
          {view === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
