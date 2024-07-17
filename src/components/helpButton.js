import React from "react";
import { useState } from "react";
import "./helpButton.css";
import "boxicons";

const HelpButton = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleButtonClick = () => {
    // if function is executed then show info will become the opposite of what it was previously
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <i
        id="info-icon"
        className="bx bx-info-square"
        onClick={handleButtonClick}
      ></i>

      {/* displaying show info */}
      {showInfo && (
        <div className="help-container">
          <div className="help-content">
            <h2 style={{ color: "#59869c", marginTop: "20px" }}>
              Shipping options overview
            </h2>

            {/* instructions on the different shipping options*/}
            <div className="instructions">
              <div>
                <h4> 1. FedEx ( Free shipping )</h4>
                <p> - Cost: Free</p>
                <p> - Delivery Time: 1-2 weeks</p>
                <p>This option is ideal for standard, non-urgent deliveries</p>
              </div>

              <div>
                <h4> 2. DHL ( Fast shipping )</h4>
                <p> - Cost:200</p>
                <p> - Delivery Time: Next Day Delivery</p>
                <p>
                  If you need your items urgently, our DHL next day delivery
                  option is the best choice.
                </p>
                <p>
                  For a flat rate of R200, you can have your items delivered the
                  very next day after dispatch.
                </p>
              </div>
            </div>

            <button className="help-button" onClick={handleButtonClick}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpButton;
