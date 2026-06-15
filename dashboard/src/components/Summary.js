import React, { useEffect, useState } from "react";
import api from "../api";


const Summary = () => {
  const [username, setUsername] = useState("");
  const [holdings, setHoldings] = useState([]);
  useEffect(() => {
    
    const fetchHoldings = async () => {
      try {
        const userRes = await api.post("/");
        console.log(userRes.data);
        setUsername(userRes.data.user);
        const res = await api.get("/holdings");
        const updatedHoldings = await Promise.all(
          res.data.map(async (holding) => {
            const priceRes = await api.get(
              `/stockPrice/${holding.name}`
            );

            return {
              ...holding,
              price: priceRes.data.price,
            };
          })
        );

        setHoldings(updatedHoldings);
      } catch (err) {
        console.error("Failed to fetch holdings", err);
      }
    };

    fetchHoldings();
  }, []);
  const investment = holdings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,0);

  const currentValue = holdings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,0);

  const pnl = currentValue - investment;

  const pnlPercent =
    investment > 0 ? ((pnl / investment) * 100).toFixed(2): 0;
  return (
    <>
      <div className="username">
        <h6>Hi, {username}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              ₹{pnl.toFixed(2)}
              <small> ({pnlPercent}%) </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>₹{currentValue.toFixed(2)}</span>
            </p>
            <p>
              Investment <span>₹{investment.toFixed(2)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;