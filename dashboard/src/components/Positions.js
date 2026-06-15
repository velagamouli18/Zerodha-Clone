// import React from "react";

// import { positions } from "../data/data";

// const Positions = () => {
//   return (
//     <>
//       <h3 className="title">Positions ({positions.length})</h3>

//       <div className="order-table">
//         <table>
          // <tr>
          //   <th>Product</th>
          //   <th>Instrument</th>
          //   <th>Qty.</th>
          //   <th>Avg.</th>
          //   <th>LTP</th>
          //   <th>P&L</th>
          //   <th>Chg.</th>
          // </tr>

//           {positions.map((stock, index) => {
            // const curValue = stock.price * stock.qty;
            // const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            // const profClass = isProfit ? "profit" : "loss";
            // const dayClass = stock.isLoss ? "loss" : "profit";

//             return (
//               <tr key={index}>
//                 <td>{stock.product}</td>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
                // <td className={profClass}>
                //   {(curValue - stock.avg * stock.qty).toFixed(2)}
                // </td>
                // <td className={dayClass}>{stock.day}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     </>
//   );
// };

// export default Positions;

import React, { useEffect, useState } from "react";
import api from "../api";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await api.get("/positions");
        setPositions(res.data);
      } catch (err) {
        console.error("Failed to fetch positions:", err);
      }
    };

    fetchPositions();
  }, []);

  if (positions.length === 0) {
    return (
      <div className="positions">
        <div className="no-positions">
          <p>You dont have any positions yet</p>
        </div>
      </div>
    );
  }

  return (
    <div className="positions">
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((position) => {
              const curValue = position.price * position.qty;
              const isProfit = curValue - position.avg * position.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = position.isLoss ? "loss" : "profit";

              return (
                <tr key={position._id}>
                  <td>{position.product}</td>
                  <td>{position.name}</td>
                  <td>{position.qty}</td>
                  <td>{position.avg.toFixed(2)}</td>
                  <td>{position.price.toFixed(2)}</td>

                  <td className={profClass}>
                    {(curValue - position.avg * position.qty).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;