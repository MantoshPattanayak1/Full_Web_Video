/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import { useTheme } from "../Utills/Themeconatext";


const sensorChart = () => {
    const { IsDarkMode } = useTheme();
   
    return (
      <div className= {`h-44  w-64  shadow-lg   bg-slate-200 sensor rounded-3xl   ${IsDarkMode ? "dark-mode" : ""}`}>
          <p className="flex font-semibold justify-center ">Recent Alert</p>
         
          <div className="shadow-sm h-8 bg-blue-500 m-2 rounded-lg">
              <h1 className="flex justify-center font-bold text-white"><WarningIcon/>Wrong parking Detected </h1>
          </div>
          <div className="shadow-sm h-8 bg-red-500 m-2 rounded-lg">
          <h1 className="flex justify-center font-bold text-white"><WarningIcon/>Crowd Detected</h1>
          </div>
          <div className="shadow-sm h-8 m-2 bg-green-500 rounded-lg">
          <h1 className="flex justify-center font-bold text-white"><WarningIcon/>Fire Detected</h1>
          </div>
        </div>
    );
};
export default sensorChart;