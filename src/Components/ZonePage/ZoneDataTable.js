
import React from "react";
import { useTheme } from "../Utills/Themeconatext";
import ZoneTable from "./ZoneTable";


const ZoneDataTable=()=>{
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
        <div className={`table-zone-container ${IsDarkMode ? 'dark-body' : ''}`}>
      < ZoneTable  users={users} />
    </div>
    )
};
export default ZoneDataTable;