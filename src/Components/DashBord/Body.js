import React from "react";
import Sidebar from "../Utills/sidebar";
import Miantain from "./Maintain";
import { useTheme } from "../Utills/Themeconatext";
import Header from "../Utills/Header";

const Body=()=>{

    const { IsDarkMode } = useTheme();
    return(
        <div>
            <Header/>
           <div className={`${IsDarkMode ? "dark" : ""} flex`}>
            <Sidebar/>
            <Miantain/>
        </div>
        </div>
    )
}
export default Body;