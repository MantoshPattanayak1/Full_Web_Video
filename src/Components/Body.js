import React from "react";
import Sidebar from "./sidebar";
import Miantain from "./Maintain";
import { useTheme } from "./Utills/Themeconatext";

const Body=()=>{

    const { IsDarkMode } = useTheme();
    return(
        <div className={`${IsDarkMode ? "dark" : ""} flex`}>
            <Sidebar/>
            <Miantain/>
     

        </div>
    )
}
export default Body;