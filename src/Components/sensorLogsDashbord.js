import React from "react";
import Sidebar from "./sidebar";
import SensorLogsMainatin from "./sensorLogsMaintain";

const SensorLogsDashboard = () => {
  return (
    <div className="flex parents">
      <Sidebar />
      <SensorLogsMainatin />
    </div>
  );
};

export default SensorLogsDashboard;
