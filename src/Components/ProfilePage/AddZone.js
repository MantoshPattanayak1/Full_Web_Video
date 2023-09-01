

import React from "react";
import Sidebar from "../Utills/sidebar";


import Header from "../Utills/Header";

const AddZone=()=>{
    return (
      <div>
        <Header/>
        <div className="Add-sensor">
          <Sidebar />
          <div className="Add_sensor_conatiner">
            <form className="Add_sensor_form">
                            <div className="flex justify-between">
                                <h1 className="my-10 font-bold text-lg text-blue-500">Add Zone</h1>
                     
                                <img  className="h-32 rounded-full "  alt="sensor_Add "  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcZZgs9f3uwO4XYlOSoFSQp6YNUHOhoP9gew&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuuy2DmtBCno_9eysCLzauLUTPB44XBRSWlwma4e0OZ5Gw-b3u8F0u7iuyRKwrmyWZjpc&usqp=CAU"></img>
                            </div>
              <div className="form-row">
                <div className="input-wrapper">
                  <label htmlFor="sensor_Add">  Zone Id</label>
                  <input type="text" id="sensor_Add" placeholder="Sensor Name" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="device_id">Zone Name</label>
                  <input type="text" id="Device_id" placeholder="Device Id ex-1676982893" />
                </div>
              </div>
    
              <div className="form-row">
                <div className="input-wrapper">
                  <label htmlFor="device_name">Latitude</label>
                  <input type="text" id="device_name" placeholder="Device Name" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="zone">Longitude</label>
                  <input type="text" id="zone" placeholder="Zone: Ex-zone-1, zone-2" />
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

export default AddZone;