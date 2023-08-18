import React from "react";
import Zonetableuser from "./zoneTable";
import { useTheme } from "./Utills/Themeconatext";



const zoneTable=()=>{
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { IsDarkMode } = useTheme();
    const users1 = [
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
      <div className={`table-container1 ${IsDarkMode ? 'dark-body' : ''}`}>
      < Zonetableuser users1={users1} />
    </div>
     
    )
};
export default zoneTable;


