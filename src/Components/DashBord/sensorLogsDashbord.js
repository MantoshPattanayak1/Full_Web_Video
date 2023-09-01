import React from "react";
import Sidebar from "../Utills/sidebar";
import SensorLogsMainatin from "./sensorLogsMaintain";
import Header from "../Utills/Header";

const SensorLogsDashboard = () => {
  return (

    <div>
      <Header />
    <div className="flex parents">
      <Sidebar />
      <SensorLogsMainatin />
    </div>
    </div>
  );
};

export default SensorLogsDashboard;
