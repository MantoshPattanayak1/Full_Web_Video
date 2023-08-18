import React from "react";


import { useTheme } from "./Utills/Themeconatext";



const Maintainsearchdashboard=()=>{
    const { IsDarkMode } = useTheme();
    return (

        <div>
            <div className="flex m-2 ">
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-1</h1>
                </div >
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-2</h1>
                </div>
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-3</h1>
                </div>
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-3</h1>
                </div>
               
            </div>
            <div className="flex m-2 ">
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-1</h1>
                </div >
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-2</h1>
                </div>
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-3</h1>
                </div>
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-3</h1>
                </div>
               
            </div>
            <div className="flex m-2 ">
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-1</h1>
                </div >
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-2</h1>
                </div>
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-3</h1>
                </div>
                <div className=   {` shadow-lg box-1 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                <h1>box-3</h1>
                </div>
               
            </div>
            </div>
    )
};
export default Maintainsearchdashboard;