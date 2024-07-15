import React, { useState } from "react";
import Register from "../components/register";
import Login from "../components/login";
import "./loginPage.css";
const LoginPage = () => {
  const [view, setView] = useState("login");

  return (
    <div className="login-page-container">
      <div className="login-text-section">
        <nav className="login-or-register">
          <h1
            className="login-header"
            onClick={() => setView("login")}
            style={{ color: view === "login" ? "grey" : "black" }}
          >
            login
          </h1>
          <h1>/</h1>
          <h1
            className="register-header"
            onClick={() => setView("register")}
            style={{ color: view === "register" ? "grey" : "black" }}
          >
            register
          </h1>
        </nav>

        {view === "login" ? <Login /> : <Register />}
      </div>

      <div className="image-section"></div>
    </div>
  );
};

export default LoginPage;
