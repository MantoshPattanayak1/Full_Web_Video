import React from "react";
import { useTheme } from "../Utills/Themeconatext";
import HumidityPieChart from "./HumdityPichart";
import OzenPieChart from "./ozonePichart";
import AirQualityPieChart from "./AirQualityPichart";
import NitrogenDiooxide from "./NitrogenDioxide";
import SensorLogsTemp from "./SensorLogsTem";
import SensorLogsHumdity from "./SensorLogsHumdity";
import SensorLogsPressue from "./SensorLogsPressue";
import SensorLogsAqi from "./SensorLogsAqi";
const Maintainsearchdashboard=()=>{
    
    const { IsDarkMode } = useTheme();
    return (

        <div>
            <div className="flex m-2 ">
                <div className=   {` shadow-lg box m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <div class="ribbon"><span>WEATHER</span></div>
                <div className="flex justify-center m-5  gap-4 ">
                <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                         <h1 className="flex justify-center font-bold">Temp</h1>

                           <h1 className="flex justify-center font-bold text-4xl">41 <p className="text-sm">°F</p> </h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>

                    </div>
                    <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                        <h1 className="flex justify-center font-bold"> Humidity</h1>
                        <h1 className="flex justify-center font-bold text-4xl">45 <p className="text-sm">%</p></h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>







                    
                    <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="flex justify-center font-bold">Air quality</h1>
                        <h1 className="flex justify-center font-bold text-3xl">85 </h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>
                </div>
                <div className="flex justify-center  p-2 gap-4 ">
                <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="flex justify-center font-bold">ATM</h1>
                        <h1 className="flex justify-center font-bold text-3xl">992 <p className="text-sm">bar</p></h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>
                    <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="flex justify-center font-bold"> Wind Speed</h1>
                        <h1 className="flex justify-center font-bold text-3xl">12 <p className="text-sm">km/hr</p></h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>
                    <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="flex justify-center font-bold"> Visibility</h1>
                        <h1 className="flex justify-center font-bold text-3xl">45 <p className="text-sm">%</p></h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>
                </div>
                </div >
                <div className=   {` shadow-lg box m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <div class="ribbon"><span>AIR QUALITY</span></div>
                <div className="flex justify-center m-5  gap-4 ">
                <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                         <h1 className="flex justify-center font-bold">PM 2.5</h1>

                           <h1 className="flex justify-center font-bold text-4xl">41 <p className="text-sm">°F</p> </h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>

                    </div>
                    <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                        <h1 className="flex justify-center font-bold"> PM 10</h1>
                        <h1 className="flex justify-center font-bold text-4xl">45 <p className="text-sm">%</p></h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>







                    
                    <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="flex justify-center font-bold">Ozone</h1>
                        <h1 className="flex justify-center font-bold text-3xl">45 </h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>
                </div>
                <div className="flex justify-center  p-2 gap-4 ">
                <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="flex justify-center font-bold">SO2</h1>
                        <h1 className="flex justify-center font-bold text-3xl">45 </h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>
                    <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="flex justify-center font-bold"> CO</h1>
                        <h1 className="flex justify-center font-bold text-3xl">45 </h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>
                    <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="flex justify-center font-bold"> NO2</h1>
                        <h1 className="flex justify-center font-bold text-3xl">45 </h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>
                </div>
                </div>
                <div className=   {` shadow-lg box m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <div class="ribbon"><span>WATER QUALITY</span></div>
                <div className="flex justify-center p-6  gap-6 ">
                <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                         <h1 className="flex justify-center font-bold">pH</h1>

                           <h1 className="flex justify-center font-bold text-4xl">6.4 <p className="text-sm"></p> </h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>

                    </div>
                    <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                        <h1 className="flex justify-center font-bold"> Turbidity</h1>
                        <h1 className="flex justify-center font-bold text-4xl">45 <p className="text-sm">%</p></h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>

                    
                    <div className=  {` shadow-md w-64 h-24 rounded-2xl bg-slate-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="flex justify-center font-bold">Conductivity</h1>
                        <h1 className="flex justify-center font-bold text-3xl">45 </h1>
                         <div className="progress-container1">
                       <div className="progress-bar1"></div>
                     </div>
                    </div>
                
                </div>
                </div>
               
               
            </div>
            <div className="flex m-2 ">
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                  <NitrogenDiooxide/>
                </div >
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <HumidityPieChart/>
                </div>
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                   <OzenPieChart/>
                </div>
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                 <AirQualityPieChart/>
                </div>
               
            </div>
            <div className="flex m-2 ">
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                    <h1 className="text-center font-bold  text-lg">Temp</h1>
                   <SensorLogsTemp/> 
                </div >
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1 className="text-center font-bold  text-lg">Humidity</h1>
                <SensorLogsHumdity/>
                </div>
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1 className="text-center font-bold  text-lg">Pressue</h1>
               < SensorLogsPressue/>
                </div>
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1 className="text-center font-bold  text-lg">AQI</h1>
                <SensorLogsAqi/>
                </div>
               
            </div>
            </div>
    )
};
export default Maintainsearchdashboard;