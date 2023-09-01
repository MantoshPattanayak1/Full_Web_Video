import React from "react";
import Sidebar from "../../../Utills/sidebar";
import CommuteIcon from '@mui/icons-material/Commute';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import WrongParkingTableuser from "./WrongParkingTableuser";
import WrongParkingGraph from "./WrongParkingGraph";
import Header from "../../../Utills/Header";
import { useTheme } from "../../../Utills/Themeconatext";
const wrongParking=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { IsDarkMode } = useTheme();
    return (

        <div>
            <Header/>
        <div className=  {`flex     parking_details_container ${IsDarkMode ? "dark-mode" : ""}`}>
         <Sidebar/>
         <div>
            <div className=  {`flex wrongt-parking-container bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}  >
             <div className="shadow-lg  wrong-parking-zone-deatils">
             <div class="ribbon"><span>POPULAR</span></div>
            </div>
            <div className= {`shadow-lg  wrong-parking-zone-deatils bg-gray-200  ${IsDarkMode ? "dark-mode" : ""}`}>
            <div class="ribbon"><span>Zone</span></div>
            <div className= {`mx-24 bg-slate-200  ${IsDarkMode ? "dark-mode" : ""}`}  >
                <h1 className="text-2xl font-extrabold ">ZONE DETAILS <MyLocationIcon/></h1>
                <p className="text-lg font-bold ">Zone Name</p>
                <p className="text-lg  font-bold">Latitude</p>
                <p className="text-lg  font-bold">Longitude</p>
            </div>
            </div>
            <div className= {`shadow-lg  wrong-parking-zone-deatils bg-gray-200  ${IsDarkMode ? "dark-mode" : ""}`}  >
            <div class="ribbon"><span>Device</span></div>
            <div className=   {`mx-20 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`} >
                <h1 className="text-2xl font-bold ">DEVICE DETAILS <DeviceHubIcon/></h1>
                <p className="text-lg  font-bold">Device Name</p>
                <p className="text-lg   font-bold">Device Type</p>
                <p className="text-lg  font-bold mx-20">IP</p>
            </div>
            </div>


             </div>
             <div className= {`flex wrongt-parking-container1 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                 <div className=   {`shadow-lg  wrong-parking-zone-deatils1 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                 <div class="ribbon"><span>Parking</span></div>
           
                         <div className=  {`mx-20  ${IsDarkMode ? "dark-mode" : ""}`}>
                             <h1 className="text-xl  font-extrabold">Total vehicles <span className="text-3xl"><CommuteIcon/></span></h1>
                                     <h1 className="text-2xl font-bold">
                                      323 <span className="text-sm font-bold">vehicles</span>
                              </h1>
                         </div>
                    
                           
             
                   </div>
               <div className=  {`shadow-lg  wrong-parking-zone-deatils1 bg-slate-200  ${IsDarkMode ? "dark-mode" : ""}`}>   
               <div class="ribbon"><span>Parking</span></div>
                          <div className="mx-10 ">
                             <h1 className="text-xl  font-extrabold"> Vehicles Idle  15 Min<span className="text-3xl"><CommuteIcon/></span></h1>
                                     <h1 className="text-xl font-bold mx-10">
                                      323 <span className="text-sm">vehicles</span>
                              </h1>
                         </div>
               </div>
               <div className=  {`shadow-lg  wrong-parking-zone-deatils1 bg-gray-200  ${IsDarkMode ? "dark-mode" : ""}`}>
               <div class="ribbon"><span>Parking</span></div>
               <div className="mx-20 ">
                             <h1 className="text-xl  font-extrabold">Avg Idle Time  <span className="text-3xl"><AccessTimeIcon /></span></h1>
                                     <h1 className="text-2xl font-bold">
                                      323 <span className="text-sm font-bold">%</span>
                              </h1>
                         </div>
                </div>
                <div className= {`shadow-lg  wrong-parking-zone-deatils1 bg-gray-200  ${IsDarkMode ? "dark-mode" : ""}`}>
                <div class="ribbon"><span>Parking</span></div>
                <div className= {`mx-10   ${IsDarkMode ? "dark-mode" : ""}`}>
                             <h1 className="text-xl text-blue-900 font-extrabold">Longest Idle Time<span className="text-3xl"><AccessTimeIcon /></span></h1>
                                     <h1 className="text-xl font-bold mx-10">
                                      32 <span className="text-sm">Mins</span>
                              </h1>
                         </div>
                </div>
           

             </div>
             
             <div  className=  {`wrong-parking-graph shadow-lg bg-gray-200  ${IsDarkMode ? "dark-mode" : ""}`}>
                         <WrongParkingGraph/>
            </div>
            <div  className= {`wrong-parking-table shadow-lg bg-gray-200  ${IsDarkMode ? "dark-mode" : ""}`}>
                        <WrongParkingTableuser/>
            </div>
             
        </div>


       
        </div>
        </div>
    )
}

export default wrongParking;