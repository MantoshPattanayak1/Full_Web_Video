


import React from "react";
import Sidebar from "./sidebar";
import ZoneMaintain from "./zoneMaintain";

const ZoneDashboard=()=>{
   return (
    <div className="flex">
    <Sidebar/>
    <ZoneMaintain />
    </div>
   )
};
export default ZoneDashboard;