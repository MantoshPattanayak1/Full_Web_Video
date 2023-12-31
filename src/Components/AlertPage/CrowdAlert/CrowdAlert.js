
import React from "react";
import "./CrowdAlert.css";
import CrowdGraph from "./CrowdGraph";

import Header from "../../Utills/Header";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import Groups3Icon from '@mui/icons-material/Groups3';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Sidebar from "../../Utills/sidebar";
import { useTheme } from "../../Utills/Themeconatext";
const CrowdAlert=()=>{
    const { IsDarkMode } = useTheme();
    return (
    
        <div>
            <Header/>
        <div className="flex     parking_details_container">
         <Sidebar/>
    
    
    <div className=  {` CrwodMianConatiner ${IsDarkMode ? "dark-mode" : ""}`}>
 

        <div className=  {`conatinerAlert ${IsDarkMode ? "dark-mode" : ""}`}>
            <div className= {`Alertbox shadow-lg bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`} >
            <div class="ribbon"><span>All Details</span></div>
           
            </div>
           <div className=   {`Alertbox1 shadow-lg bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`} >
           <div class="ribbon"><span>Zone</span></div>
           <div class="zone_Details">
              <h1 className="mx-28 text-3xl font-bold  p-5">Zone deatils <MyLocationIcon/></h1>
              <h1 class="mx-40 text-2xl font-bold  ">Zone Name</h1>
              <h1 class="mx-40 text-2xl font-bold ">Latitude</h1>
              <h1 class="mx-40 text-2xl font-bold ">Longitude</h1>
           </div>
          </div>
           <div className=  {`Alertbox2 shadow-lg bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
           <div class="ribbon"><span>Device</span></div>
           <div class="zone_Details">
              <h1 className="mx-28 text-3xl font-bold  p-5">Device deatils <DeviceHubIcon/></h1>
              <h1 class="mx-40 text-2xl font-bold  ">Device Name</h1>
              <h1 class="mx-40 text-2xl font-bold ">Device Type</h1>
              <h1 class="mx-40 text-2xl font-bold ">IP Address</h1>
           </div>
          
           </div>
        </div>
        

     <div className="continerAlert2 ">
        <div className= {`AlertBox4 shadow-lg bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
       
        <div className="total_pepole">
        <h1 className="font-bold mx-20 text-xl"> Total People < Groups3Icon/></h1>
        <h1 className="font-bold text-3xl mx-20 p-8 ">321 <span className="font-semibold text-lg mx-10 ">People</span></h1>
     
        </div>
          

        </div>
        <div className= {`AlertBox5 shadow-lg bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
      
            <div>
                <h1 className="font-bold mx-10 text-xl  "> People Idle  15 min< Groups3Icon/></h1>
                <h1 className="font-bold text-3xl mx-20 p-8 ">321 <span className="font-semibold text-lg mx-10 ">People</span></h1>
            </div>

        </div>
        <div className=  {`AlertBox6 shadow-lg bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`} >
           
            <div className="">
                   <h1 className="font-bold mx-12 text-xl">Average Idle Time <AccessTimeIcon/></h1>
                   <h1 className="font-bold text-3xl mx-20 p-8 "> 9 <span >%</span></h1>
            </div>

        </div>
        <div className=   {`AlertBox6 shadow-lg bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
      
            <div className="">
                   <h1 className="font-bold mx-12 text-xl">Average Idle Time <AccessTimeIcon/></h1>
                   <h1 className="font-bold text-3xl mx-10 p-8 "> 9 <span >Mins</span></h1>
            </div>

        </div>
        <div className=  {`AlertBox6 shadow-lg bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
      
            <div className="">
                   <h1 className="font-bold mx-12 text-xl">Longest Idle Time <AccessTimeIcon/></h1>
                   <h1 className="font-bold text-3xl mx-10 p-8 "> 32 <span >Mins</span></h1>
                   
            </div>

        </div>

     </div>
     <div className=   {` CrowdAlertGraph shadow-lg bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}   >
        <div className="graph">
       <h1 className="text-3xl "> Crowd Graph</h1>
       </div>
        <CrowdGraph/>

     </div>
    </div>
    </div>
    </div>


    )
}
export default CrowdAlert;