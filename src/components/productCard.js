import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice";

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState("Color");
  const dispatch = useDispatch();

  const handleSelect = (color) => {
    setSelectedColor(color);
  };

  const handleBuy = () => {
    // Logging the product object to debug
    console.log("Product object:", product);

    // Safely access and parse the price
    if (product && product.price) {
      const price = parseFloat(
        product.price.replace(/R\s?/, "").replace(/,/g, "")
      );
      dispatch(addItem({ ...product, price }));
    } else {
      console.error("Product or price is undefined", product);
    }
  };

  return (
    <Card
      className="Cards"
      key={product.id}
      style={{ width: "18rem", border: "1px solid black", margin: "10px" }}
    >
      <Card.Img
        className="images"
        variant="top"
        src={product.img}
        alt={product.title}
      />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{product.title}</Card.Title>
        <Card.Text className="card-text">{product.text}</Card.Text>

        <div className="color-section">
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {selectedColor}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Grey">Grey</Dropdown.Item>
              <Dropdown.Item eventKey="White">White</Dropdown.Item>
              <Dropdown.Item eventKey="Black">Black</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h4>{product.price}</h4>
        </div>

        <div className="bottom-section">
          <Button id="buy-btn" variant="success" onClick={handleBuy}>
            Add to cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
