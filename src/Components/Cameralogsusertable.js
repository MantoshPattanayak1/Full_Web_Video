import React from "react";
import { useTheme } from "./Utills/Themeconatext";


import Cameralogstable from "./CameraLogstable";


const Cameralogsusertable=()=>{
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
    return(
        <div className={`table-container shadow-lg ${IsDarkMode ? 'dark-body' : ''}`}>
        <Cameralogstable users={users} />
      </div>
    )
};

export default Cameralogsusertable;