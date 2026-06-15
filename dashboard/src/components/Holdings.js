import React, { useState, useEffect } from "react";
import api from "../api";
import { VerticalGraph } from "./VerticalGraph";

// import { holdings } from "../data/data";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
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

        setAllHoldings(updatedHoldings);
      } catch (err) {
        console.error(err);
      }
    };

    fetchHoldings();
  }, []);

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  // export const data = {
  //   labels,
  //   datasets: [
  // {
  //   label: 'Dataset 1',
  //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
  // },
  //     {
  //       label: 'Dataset 2',
  //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
  //     },
  //   ],
  // };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const pnl = (stock.price - stock.avg) * stock.qty;
            const netChange =
              ((stock.price - stock.avg) / stock.avg) * 100;
            const isProfit = pnl >= 0;
            const profClass = isProfit ? "profit" : "loss";
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {pnl.toFixed(2)}
                </td>
                <td className={profClass}>
                  {netChange.toFixed(2)}%
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;