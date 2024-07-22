import React from "react";
import { Routes, Route } from "react-router-dom";
import "boxicons/css/boxicons.min.css";
import Header from "./components/header";
import Home from "./pages/home";
import LoginPage from "./pages/loginPage";
import Product from "./pages/product";
import Cart from "./pages/cart";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
