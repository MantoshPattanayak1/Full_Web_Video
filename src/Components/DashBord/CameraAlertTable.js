import React from "react";
import UserTable from "./CameraTable";
import { useTheme } from "../Utills/Themeconatext";
const CameraAlertTable=()=>{


  const { IsDarkMode } = useTheme();
    const users = [
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
        { Device:14, DeviceName: "sensor",Zone:"Campus-1",Deviceip:1906726, DeviceStatus:"online", EventType:"online",Date:"11/12/17"},
  
      ];
    return (
      <div className={`table-container ${IsDarkMode ? 'dark-body' : ''}`}>
      <UserTable users={users} />
    </div>
     
    )
};
export default CameraAlertTable;


