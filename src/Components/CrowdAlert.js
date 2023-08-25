
import React from "react";
import "./CrowdAlert.css";
import CrowdGraph from "./CrowdGraph";

import Header from "./Header";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
const CrowdAlert=()=>{
    return (
       <div >
        <Header/>
    
    <div className="CrwodMianConatiner">
 

         <div className="conatinerAlert">
            <div className="Alertbox shadow-lg bg-gray-200">
            <div class="ribbon"><span>All Details</span></div>
           
            </div>
           <div className="Alertbox1 shadow-lg bg-gray-200">
           <div class="ribbon"><span>Zone</span></div>
           <div class="zone_Details">
              <h1 className="mx-36 text-3xl font-bold  p-5">Zone deatils <MyLocationIcon/></h1>
              <h1 class="mx-40 text-2xl font-bold text-blue-900 ">Zone Name</h1>
              <h1 class="mx-40 text-2xl font-bold text-blue-900">Latitude</h1>
              <h1 class="mx-40 text-2xl font-bold text-blue-900">Longitude</h1>
           </div>
          </div>
           <div className="Alertbox2 shadow-lg bg-gray-200">
           <div class="ribbon"><span>Device</span></div>
           <div class="zone_Details">
              <h1 className="mx-36 text-3xl font-bold  p-5">Device deatils <DeviceHubIcon/></h1>
              <h1 class="mx-40 text-2xl font-bold text-blue-900 ">Device Name</h1>
              <h1 class="mx-40 text-2xl font-bold text-blue-900">Device Type</h1>
              <h1 class="mx-40 text-2xl font-bold text-blue-900">IP Address</h1>
           </div>
          
           </div>
        </div>
        

     <div className="continerAlert2 ">
        <div className="AlertBox4 shadow-lg bg-gray-200">
        <div class="ribbon"><span>POPULAR</span></div>
            <h1>Box-2</h1>

        </div>
        <div className="AlertBox5 shadow-lg bg-gray-200">
        <div class="ribbon"><span>POPULAR</span></div>
            <h1> Box-2</h1>

        </div>
        <div className="AlertBox6 shadow-lg bg-gray-200">
            <div class="ribbon"><span>POPULAR</span></div>
            <h1>Box-2</h1>

        </div>

     </div>
     <div className="CrowdAlertGraph shadow-lg bg-gray-200">
        <div className="graph">
       <h1 className="text-3xl "> Crowd Graph</h1>
       </div>
        <CrowdGraph/>

     </div>
    </div>
    </div>


    )
}
export default CrowdAlert;