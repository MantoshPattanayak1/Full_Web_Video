import React from "react";
import Sidebar from "../Utills/sidebar";
import Header from "../Utills/Header";
import "./ZoneDashboard.css";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';
import AirIcon from '@mui/icons-material/Air';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useTheme } from "../Utills/Themeconatext";
import ZoneDataTable from "./ZoneDataTable";

const ZoneDashboard = () => {
   const { IsDarkMode } = useTheme();
   return (
      <div className="zone-dashboard" >
         <Header />
         <div className="flex">
            <Sidebar />
            <div className="content"   >
               <div className="box-container " >
                  <div className= {` box bg-gray-200 shadow-lg ${IsDarkMode ? "dark-mode" : ""}`}>
                           <div className=" title-container ">
                              <h1 className="title">Camera Details</h1>
                       
                               <CameraAltIcon className="icon1" />  
                            
                        </div>
                           <div class="ribbon"><span>Camera</span></div>

                           <div className="flex justify-around p-2">
                              <div className="shadow-lg bg-slate-200 w-32 h-32 rounded-3xl ">
                                 <h1 className="text-center font-bold p-2 text-xl hover:text-blue-700">Online</h1>
                                 <div class=" h-1 w-16  bg-blue-600"></div>
                                 <h1 className="text-2xl text-center font-extrabold hover:text-red-600 p-3">32</h1>
                               
                              </div>
                              <div className="shadow-lg bg-slate-200 w-32 h-32 rounded-3xl">
                               <h1 className="text-center font-bold p-2 text-xl hover:text-blue-700">Offline</h1>
                               <div class=" h-1 w-16 bg-red-600" ></div>
                             
                               <h1 className=" data text-2xl text-center font-extrabold  hover:text-red-600 p-3">32</h1>
                            
                               </div>
                                
                           </div>
                     </div>
                     <div className=  {` box bg-gray-200 shadow-lg ${IsDarkMode ? "dark-mode" : ""}`} >
                     <div className="title-container">
                           <h1 className="title">Water Sensor</h1>
                              <InvertColorsOffIcon className="icon2" />
                        </div>
                     <div class="ribbon"><span>Water</span></div>
                     <div className="flex justify-around p-2">
                              <div className="shadow-lg bg-slate-200 w-32 h-32 rounded-3xl ">
                                 <h1 className="text-center font-bold p-2 text-xl hover:text-blue-700">Online</h1>
                                 <div class=" h-1 w-16  bg-blue-600"></div>
                                 <h1 className="text-2xl text-center font-extrabold hover:text-red-600 p-3">32</h1>
                               
                              </div>
                              <div className="shadow-lg bg-slate-200 w-32 h-32 rounded-3xl">
                               <h1 className="text-center font-bold p-2 text-xl hover:text-blue-700">Offline</h1>
                               <div class=" h-1 w-16 bg-red-600" ></div>
                             
                               <h1 className=" data text-2xl text-center font-extrabold  hover:text-red-600 p-3">32</h1>
                            
                               </div>
                                
                           </div>
                     </div>
                     <div className=  {`box bg-gray-200 shadow-lg ${IsDarkMode ? "dark-mode" : ""}`} >
                        <div className="title-container">
                           <h1 className="title">Air Sensor</h1>
                              <AirIcon className="icon2" />
                        </div>
                     <div class="ribbon"><span>Air</span></div>
                     <div className="flex justify-around p-2">
                              <div className="shadow-lg bg-slate-200 w-32 h-32 rounded-3xl ">
                                 <h1 className="text-center font-bold p-2 text-xl hover:text-blue-700">Online</h1>
                                 <div class=" h-1 w-16  bg-blue-600"></div>
                                 <h1 className="text-2xl text-center font-extrabold hover:text-red-600 p-3">32</h1>
                               
                              </div>
                              <div className="shadow-lg bg-slate-200 w-32 h-32 rounded-3xl">
                               <h1 className="text-center font-bold p-2 text-xl hover:text-blue-700">Offline</h1>
                               <div class=" h-1 w-16 bg-red-600" ></div>
                             
                               <h1 className=" data text-2xl text-center font-extrabold  hover:text-red-600 p-3">32</h1>
                            
                               </div>
                                
                           </div>
                     </div>
                     <div className=  {`box bg-gray-200 shadow-lg ${IsDarkMode ? "dark-mode" : ""}`} >
                     <div className="title-container">
                           <h1 className="title">Fire Sensor</h1>
                              < WhatshotIcon className="icon3" />
                        </div>
                     <div class="ribbon"><span>Fire</span></div>
                     <div className="flex justify-around p-2">
                              <div className="shadow-lg bg-slate-200 w-32 h-32 rounded-3xl ">
                                 <h1 className="text-center font-bold p-2 text-xl hover:text-blue-700">Online</h1>
                                 <div class=" h-1 w-16  bg-blue-600"></div>
                                 <h1 className="text-2xl text-center font-extrabold hover:text-red-600 p-3">32</h1>
                               
                              </div>
                              <div className="shadow-lg bg-slate-200 w-32 h-32 rounded-3xl">
                               <h1 className="text-center font-bold p-2 text-xl hover:text-blue-700">Offline</h1>
                               <div class=" h-1 w-16 bg-red-600" ></div>
                             
                               <h1 className=" data text-2xl text-center font-extrabold  hover:text-red-600 p-3">32</h1>
                            
                               </div>
                                
                           </div>
                     </div>
                     <div className=  {`box bg-gray-200 shadow-lg ${IsDarkMode ? "dark-mode" : ""}`} >
                     <div className="title-container">
                  <h1 className="title">Energy Sensor</h1>
                  <ElectricBoltIcon className="icon" />
               </div>
                     <div class="ribbon"><span>Energy</span></div>
                     <div className="flex justify-around p-2">
                              <div className="shadow-lg bg-slate-200 w-32 h-32 rounded-3xl ">
                                 <h1 className="text-center font-bold p-2 text-xl hover:text-blue-700">Online</h1>
                                 <div class=" h-1 w-16  bg-blue-600"></div>
                                 <h1 className="text-2xl text-center font-extrabold hover:text-red-600 p-3">32</h1>
                               
                              </div>
                              <div className="shadow-lg bg-slate-200 w-32 h-32 rounded-3xl">
                               <h1 className="text-center font-bold p-2 text-xl hover:text-blue-700">Offline</h1>
                               <div class=" h-1 w-16 bg-red-600" ></div>
                             
                               <h1 className=" data text-2xl text-center font-extrabold  hover:text-red-600 p-3">32</h1>
                            
                               </div>
                                
                           </div>
                     </div>
               </div>
               <div className=  {`table-box bg-slate-200  shadow-lg ${IsDarkMode ? "dark-mode" : ""}`}>
                  <h1 className="font-bold text-center text-3xl hover:text-red-700 "> Zone Table</h1>
                  <div className="progress-container1"   >
                        <div className="progress-bar2"></div>
                    </div>

                    <ZoneDataTable/>
         
               </div>
            </div>
         </div>
      </div>
   );
};

export default ZoneDashboard;
