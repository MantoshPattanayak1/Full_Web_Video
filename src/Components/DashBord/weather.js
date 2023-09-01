/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

import { useTheme } from "../Utills/Themeconatext";

export default function weather(){

    const { IsDarkMode } = useTheme();

    return (
        <>
        <div  className={`m-1 h-44  w-96  shadow-lg bg-slate-200 rounded-3xl flex  ${IsDarkMode ? "dark-mode" : ""}`}>
          
   
	       <div class="weatherIcon">
		  <div class="mostlycloudy">
			    <div class="inner"></div>
            
               
		     </div>
           <div className="m-7 flex">
               <img className="h-12 w-16  "alt="humdity" src="https://cdn-icons-png.flaticon.com/512/6393/6393411.png"></img>
               <h1 className="font-medium m-3 ">Humdity:85%</h1>
               <img className="h-7 "alt="logo"src="https://cdn-icons-png.flaticon.com/512/121/121765.png"></img>
               <h1 className="font-medium m-2 ">WindSpeed:5km/h</h1>
             
           </div>
	     </div>
         <div className="m-5">
                <h1 className="font-extrabold text-5xl ">32°C</h1>
                <p className="font-medium  ">Clouds</p>
                <h1 className="font-bold ">Bhubaneswar</h1>
            </div>
     </div>
   
    </>
     
    

    );
}
// export default weather;