import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../api";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  useEffect(() => {
    const fetchPrice = async () => {
        try {
        const res = await api.get(`/stockPrice/${uid}`);
        setStockPrice(res.data.price);
        } catch (err) {
        console.error("Failed to fetch stock price", err);
        }
    };

    fetchPrice();
    }, [uid]);

  const generalContext = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      await api.post("/sellOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      });

      generalContext.closeSellWindow();
    } catch (err) {
      alert(
        err.response?.data?.error ||
        "Failed to sell stock"
        );
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <div className="price-info">
            Current Price: ₹{Number(stockPrice).toFixed(2)}
           </div>
        </div>
      </div>

      <div className="buttons">
        <span>Sell Order</span>

        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>

          <Link
            to=""
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;