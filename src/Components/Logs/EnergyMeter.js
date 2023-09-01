import React from "react";
import "./WaterMeter.css";
import Header from "../Utills/Header";
import Sidebar from "../Utills/sidebar";
import SensorsIcon from '@mui/icons-material/Sensors';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff';
import EnergyGraph from "./EnergtGraph";
import { useTheme } from "../Utills/Themeconatext";
import AbNormally from "./AbNoramlPop";
import { useState } from "react";
import Co2Icon from '@mui/icons-material/Co2';
import WaterIcon from '@mui/icons-material/Water';
import EnergyUserTable from "./EnergyUserTable";

const EnergyMeter = () => {

  /****Popup code */
  const [abNormalPopupOpen, setAbNormalPopupOpen] = useState(false);

  const toggleAbNormalPopup = () => {
    setAbNormalPopupOpen(!abNormalPopupOpen);
  };

  const { IsDarkMode } = useTheme();
  return (
    <div className=  {` WaterMeter ${IsDarkMode ? "dark-mode" : ""}`}>  
      <Header />
      <div className=  {` Content ${IsDarkMode ? "dark-mode" : ""}`}>
        <Sidebar />
        <div className=   {` MainContainer ${IsDarkMode ? "dark-mode" : ""}`}>
          <div className=   {`  drop-down shadow-lg bg-gray-200 flex   ${IsDarkMode ? "dark-mode" : ""}`}>
           <select className=  {` select bg-gray-200  ${IsDarkMode ? "dark-mode" : ""}`}>
            <option>All Zone</option>
            <option>Zone1</option>
            <option>Zone1</option>
            <option>Zone1</option>
            <option>Zone1</option>
            <option>Zone1</option>
            <option>Zone1</option>
           </select>

             <div>
                   <h1 className="meter_water_name mx-96 font-extrabold text-2xl">Energy Meter</h1>
            </div>

   
           
          </div>
         
          <div className=  {` Boxes ${IsDarkMode ? "dark-mode" : ""}`}>
            <div className=  {` box-1 Details shadow-lg bg-gray-200 rounded-3xl  ${IsDarkMode ? "dark-mode" : ""}`}>
              <h1  className="text-center text-2xl font-extrabold"> Details</h1>
            
              <div className=   {`BoxesDetails ${IsDarkMode ? "dark-mode" : ""}`}>

             <div className=   {` flex gap-28 p-2  ${IsDarkMode ? "dark-mode" : ""}`}>
                <div className=   {`  shadow-md h-20 w-44 rounded-2xl  ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="text-lg font-medium mx-2"> Sensor Id   <SensorsIcon/></h1>
                    <div className="progress-container1"   >
                        <div className="progress-bar2"></div>
                    </div>
                       <h1 className="font-semibold text-xl text-center p-3 ">212</h1>

                </div >
                <div className=  {` shadow-md h-20  w-44 rounded-2xl  ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="text-lg font-medium mx-2">Zone Name  <SensorsIcon/></h1>
                    <div className="progress-container1" >
                        <div className="progress-bar2"></div>
                    </div>
                   
                       <h1 className="font-semibold text-xl text-center p-3 ">212</h1>
                 
                </div >
              </div>
              <div className= {`  flex gap-28 p-2  ${IsDarkMode ? "dark-mode" : ""}`}>
                <div className=  {`  shadow-md h-20 w-44 rounded-2xl ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="text-lg font-medium mx-2">No of Online <OnlinePredictionIcon/></h1>
                    <div className="progress-container1">
                        <div className="progress-bar2"></div>
                    </div>
                    
                       <h1 className="font-semibold text-xl text-center p-3 ">212</h1>
                 
                </div >
                <div className=  {` shadow-md h-20  w-44 rounded-2xl  ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="text-lg font-medium mx-4 ">No of Offline <PortableWifiOffIcon/></h1>
                    <div className="progress-container1">
                        <div className="progress-bar2"></div>
                    </div>
                    
                       <h1 className="font-semibold text-xl text-center p-3 ">212</h1>
              
                </div >
              </div>
              </div>
            </div>
            <div className=  {` box-1 Details shadow-lg bg-gray-200 rounded-3xl ${IsDarkMode ? "dark-mode" : ""}`}>
            <h1  className="text-center text-2xl font-bold">Avg Value</h1>
            <div className=   {`BoxesDetails ${IsDarkMode ? "dark-mode" : ""}`}>

          <div className=   {` flex gap-28 p-2  ${IsDarkMode ? "dark-mode" : ""}`}> 
           <div className=   {`  shadow-md h-20 w-44 rounded-2xl  ${IsDarkMode ? "dark-mode" : ""}`}>
                     <h1 className="text-lg font-medium mx-2"> AQI   < WaterIcon/></h1>
                       <div className="progress-container1"   >
            <div className="progress-bar2"></div>
             </div>
          <h1 className="font-semibold text-xl text-center p-3 ">212</h1>

   </div >
      <div className=  {` shadow-md h-20  w-44 rounded-2xl  ${IsDarkMode ? "dark-mode" : ""}`}>
         <h1 className="text-lg font-medium mx-2">Co2 <Co2Icon/></h1>
           <div className="progress-container1" >
           <div className="progress-bar2"></div>
       </div>
       
      
          <h1 className="font-semibold text-xl text-center p-3 ">212</h1>
    
        </div >
       </div>
      <div className= {`  flex gap-28 p-2  ${IsDarkMode ? "dark-mode" : ""}`}>
   <div className=  {`  shadow-md h-20 w-44 rounded-2xl ${IsDarkMode ? "dark-mode" : ""}`}>
       <h1 className="text-lg font-medium mx-2">03 <OnlinePredictionIcon/></h1>
       <div className="progress-container1">
           <div className="progress-bar2"></div>
       </div>
       
          <h1 className="font-semibold text-xl text-center p-3 ">212</h1>
    
          </div >
           <div className=  {` shadow-md h-20  w-44 rounded-2xl  ${IsDarkMode ? "dark-mode" : ""}`}>
       <h1 className="text-lg font-medium mx-4 ">So2 <PortableWifiOffIcon/></h1>
       <div className="progress-container1">
           <div className="progress-bar2"></div>
       </div>
       
          <h1 className="font-semibold text-xl text-center p-3 ">212</h1>
 
            </div >
       </div>
 </div>
            </div>
            <div className=  {`  box-1 Details shadow-lg bg-gray-200 rounded-3xl  ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1  className="text-center text-2xl font-bold">Status</h1>
                <div className= {` flex justify-between  ${IsDarkMode ? "dark-mode" : ""}`}>
                  <div className=   {` shadow-md w-56 h-48 rounded-3xl ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="font-bold text-xl text-center">Normal</h1>
                    <div className=" normal_box shadow-md  rounded-full bg-gray-300 w-32 h-32 p-10 m-5  mx-12">
                        <h1 className="font-extrabold text-center text-2xl">21</h1>
                    </div>
                  </div>
                  <div className=  {`shadow-md w-56 rounded-3xl  ${IsDarkMode ? "dark-mode" : ""}`  }  >
                    <h1 className="font-bold text-xl text-center">AbNormal</h1>
                    <div className=" normal_box shadow-md  rounded-full bg-gray-300 w-32 h-32 p-10 m-5  mx-12" onClick={toggleAbNormalPopup} >
                        <h1 className="font-extrabold text-center text-2xl"  >11</h1>
                        
                    </div>
                    <div>
                           <AbNormally show={abNormalPopupOpen} onClose={toggleAbNormalPopup} />
                        </div>
                        
                  </div>

                </div>
            </div>
          </div>
          <div className=  {` Boxes h-20 ${IsDarkMode ? "dark-mode" : ""}`}>
            <div className= {` box-2 maxMeter shadow-lg bg-gray-200 rounded-3xl   ${IsDarkMode ? "dark-mode" : ""}`}>
            <h1  className="text-center text-xl font-bold">MAX pH</h1>
            <div className="progress-container1">
                        <div className="progress-bar2"></div>
                    </div>
            <div className="max_ph1">
              <h1 className="text-center text-xl font-bold ">Conductivity</h1>
              <h1 className="text-center text-xl font-bold">Turbidity</h1>
            </div>
            </div>
            <div className= {` box-2 maxMeter shadow-lg bg-gray-200 rounded-3xl  ${IsDarkMode ? "dark-mode" : ""}`}>
            <h1  className="text-center text-xl font-bold">MAX PH</h1>
            <div className="progress-container1">
                        <div className="progress-bar2"></div>
                    </div>
            </div>
            <div className= {` box-2 maxMeter shadow-lg bg-gray-200  rounded-3xl ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1  className="text-center text-xl font-bold">MAX PH</h1>
                <div className="progress-container1"  >
                        <div className="progress-bar2"></div>
                    </div>
            </div>
            <div className= {`   box-2 maxMeter shadow-lg bg-gray-200 rounded-3xl ${IsDarkMode ? "dark-mode" : ""}`}>
            <h1  className="text-center text-xl font-bold">MAX PH</h1>
            <div className="progress-container1">
                        <div className="progress-bar2"></div>
                    </div>
            </div>
          </div>
          <div className=  {` Boxes1 ${IsDarkMode ? "dark-mode" : ""}`}>
            <div className=  {` box-3 Graph shadow-lg bg-gray-200   ${IsDarkMode ? "dark-mode" : ""}`}>
            <h1  className="text-center text-xl font-bold">TABLE</h1>
            <EnergyUserTable/>
            </div>
            <div className= {` box-3 Graph shadow-lg bg-gray-200  ${IsDarkMode ? "dark-mode" : ""}`}>
              <h1  className="text-center text-xl font-bold">GRAPH</h1>
              <EnergyGraph/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyMeter;
