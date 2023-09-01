



import React from "react";
import Sidebar from "../Utills/sidebar";
import Header from "../Utills/Header";
const AddCamera=()=>{
  
    return (
      <div>
        <Header/>
        <div className="Add-sensor">
          <Sidebar />
          <div className="Add_sensor_conatiner">
            <form className="Add_sensor_form">
                            <div className="flex justify-between">
                                <h1 className="my-10 font-bold text-lg text-blue-500">Add Camera</h1>
                     
                                <img  className="h-32 rounded-full "  alt="sensor_Add "  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuy2DmtBCno_9eysCLzauLUTPB44XBRSWlwma4e0OZ5Gw-b3u8F0u7iuyRKwrmyWZjpc&usqp=CAU"></img>
                            </div>
              <div className="form-row">
                <div className="input-wrapper">
                  <label htmlFor="sensor_Add">Camera Type</label>
                  <input type="text" id="sensor_Add" placeholder="Sensor Name" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="device_id">Device Id</label>
                  <input type="text" id="Device_id" placeholder="Device Id ex-1676982893" />
                </div>
              </div>
    
              <div className="form-row">
                <div className="input-wrapper">
                  <label htmlFor="device_name">Device Name</label>
                  <input type="text" id="device_name" placeholder="Device Name" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="zone">Zone</label>
                  <input type="text" id="zone" placeholder="Zone: Ex-zone-1, zone-2" />
                </div>
              </div>
    
              <div className="form-row">
                <div className="input-wrapper">
                  <label htmlFor="IP_Address">IP Address</label>
                  <input type="text" id="ip_address" placeholder="IP Address" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="MAC_Address">MAC Address</label>
                  <input type="text" id="mac_address" placeholder="MAC Address" />
                </div>
              </div>
    
              <div className="form-row">
                <button className="btn-primary" type="submit" value="Submit">Add</button>
                <button className="btn-secondary" type="button">Cancel</button>
              </div>
    
            </form>
          </div>
        </div>
        </div>
      );
    };

export default AddCamera;