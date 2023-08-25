import React from "react";
import Sidebar from "./sidebar";
import SensorLogsMainatin from "./sensorLogsMaintain";
import Header from "./Header";

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
