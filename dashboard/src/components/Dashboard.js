import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import PortfolioAssistant from "./Portfolio_Assistant/PortfolioAssistant";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [assistantOpen, setAssistantOpen] = useState(false);
  return (
    <div className="dashboard-layout">

      <div className={`watchlist-section ${assistantOpen ? "watchlist-open" : ""}`}>
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      </div>

      <div className={`content-section ${assistantOpen ? "content-open" : ""}`}>
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>

      <PortfolioAssistant
        open={assistantOpen}
        setOpen={setAssistantOpen}
      />

    </div>
  );
};

export default Dashboard;