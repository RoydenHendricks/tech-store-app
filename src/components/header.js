import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../slices/loginSlice";
import "./header.css";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);

  const location = useLocation();

  //  function that will change the color of the navbar based on the page that is clicked
  const getBackgroundColor = () => {
    switch (location.pathname) {
      case "/":
        return "transparent";
      case "/products":
        return "lightgrey";
      case "/cart":
        return "lightgrey";

      default:
        return "white";
    }
  };

  return (
    <div
      className="navbar-section"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="navbar-links">
        <div className="nav-groups">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/products">
            Products
          </Link>
        </div>

        <div className="store-name">PixelFusion</div>

        <div className="nav-groups">
          <Link className="links" to="/cart">
            Cart
          </Link>

          {/* If there i a user logged in display the username  */}
          {/* Otherwise display Guest */}

          {currentUser ? (
            <span className="current-user">{currentUser.username}</span>
          ) : (
            <span className="current-user">Guest</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
