import React, { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import NotificationsPausedIcon from '@mui/icons-material/NotificationsPaused';
import CameraRearIcon from '@mui/icons-material/CameraRear';

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Person3Icon from '@mui/icons-material/Person3';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DangerousIcon from '@mui/icons-material/Dangerous';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import SensorsIcon from '@mui/icons-material/Sensors';
import EditIcon from '@mui/icons-material/Edit';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PlaceIcon from '@mui/icons-material/Place';
import { useSelector } from "react-redux";
import { useTheme } from "./Utills/Themeconatext";


import { Link } from "react-router-dom";
const Sidebar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const[IslogOpen, setIslogOpen]=useState(false);
    const { IsDarkMode } = useTheme();

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const toggleAlert = () => {
        setIsAlertOpen(!isAlertOpen);
    };
  const toggleZone=()=>{
    setIslogOpen(!IslogOpen);

  }
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    // Early Return pattern
    if (!isMenuOpen) return null;

    return (
        <div className={`p-5 shadow-md rounded-lg  ${IsDarkMode ? "dark-mode" : ""}`}>
            <ul className="space-y-2">
                <Link to="/">
                <li className="group flex items-center py-2 px-3 font-semibold transition duration-200 hover:bg-gray-200">
                    <span className="w-1 h-4 bg-red-500 mr-2"></span>
                    <DashboardIcon className="w-5 h-5 "/>
                    <span className="ml-2  ">Dashboard</span>
                </li>
                </Link>
                <Link to="/LiveVideo">
                <li className="flex items-center py-2 px-3 font-semibold hover:bg-gray-200">
                    <LiveTvIcon className="w-5 h-5 mr-2 "/>
                    <span className="ml-2 ">Live</span>
                </li>
                </Link>
                <Link to="/Searchdashboard">
                   <li className="flex items-center py-2 px-3 font-semibold hover:bg-gray-200">
                      <LiveTvIcon className="w-5 h-5 mr-2 "/>
                      <span className="ml-2  ">Search</span>
                   </li>
                </Link>
                <li className="flex items-center justify-between py-2 px-3 font-semibold hover:bg-gray-200 relative" onClick={() => toggleAlert()}>
                    <NotificationsPausedIcon className="w-5 h-5 mr-2 "/>
                    <span className="ml-2 ">Alert</span>
                    <ExpandLessIcon className={`w-4 h-4 ml-2  ${isAlertOpen ? 'rotate-180' : ''}`} />
                </li>
                {isAlertOpen && (
                    <>
                       <Link to="/CrowdAlert"><li className="hover:text-blue-600 py-1 px-4 "><GroupsIcon/>Crowd Alert</li></Link>
                        <li className="hover:text-blue-600 py-1 px-4  "><LocalFireDepartmentIcon/>Fire </li>
                      <Link to="/WrongParking"> <li className="hover:text-blue-600 py-1 px-4 "><DangerousIcon/>Wrong Parking</li></Link>
                    <Link to="/AirAlerts">   <li className="hover:text-blue-600 py-1 px-4  "><AcUnitIcon/>Air quality</li></Link> 
                        <li className="hover:text-blue-600 py-1 px-4 "><InvertColorsIcon/>Water quality</li>
                    </>
                )}

                <Link to="/ZoneDashboard">
                  <li className="flex items-center py-2 px-3 font-semibold hover:bg-gray-200">
                    <CameraRearIcon className="w-5 h-5  "/>
                    <span className="ml-2 ">Zone</span>
                   </li>
                </Link>
                <li className="flex items-center justify-between py-2 px-3 font-semibold hover:bg-gray-200 relative" onClick={() => toggleZone()}>
                    <NotificationsPausedIcon className="w-5 h-5 mr-2 "/>
                    <span className="ml-2 ">Logs</span>
                    <ExpandLessIcon className={`w-4 h-4 ml-2  ${IslogOpen ? 'rotate-180' : ''}`} />
                </li>
                {IslogOpen && (
                    <>
                  <Link to="/Cameralogsdashboard">  <li className="hover:text-blue-600 py-1 px-4 "><CameraAltIcon/>Camera Logs</li> </Link> 
                    <Link to="/SensorLogsDashboard">  <li className="hover:text-blue-600 py-1 px-4  "><SensorsIcon/>Sensor Logs </li></Link> 
                       
                    </>
                )}

                <li className="flex items-center py-2 px-3 font-semibold hover:bg-gray-200">
                    <ManageAccountsIcon className="w-5 h-5 mr-2 "/>
                    <span className="ml-2 ">Maintain</span>
                </li>
                <li className="flex items-center justify-between py-2 px-3 font-semibold hover:bg-gray-100 relative" onClick={() => toggleProfile()}>
                    <Person3Icon className="w-5 h-5 mr-2 "/>
                    <span className="ml-2 ">Profile</span>
                    <ExpandLessIcon className={`w-4 h-4 ml-2   ${isProfileOpen ? 'rotate-180' : ''}`} />
                </li>
                {isProfileOpen && (
                    <>
                      <Link to="/EditProfile"><li className="hover:text-blue-600 py-1 px-4 "><EditIcon/>Edit Profile</li></Link> 
                      <Link to="/AddSensor"> <li className="hover:text-blue-600 py-1 px-4 ">< SensorsIcon/>Add sensor</li></Link>
                     <Link to="/AddCamera"><li className="hover:text-blue-600 py-1 px-4  ">< CameraAltIcon />Add camera</li></Link>
                      <Link to="/AddZone">  <li className="hover:text-blue-600 py-1 px-4 "><PlaceIcon/> Add zone</li></Link>
                    </>
                )}
                 <li className="flex items-center py-2 px-3 font-semibold hover:bg-gray-200">
                        <LogoutIcon className="w-6 h-5 mr-3 "/>
                        <span className="mr-10 ">Logout</span>
                    </li>
            </ul>
             <div className= {`fixed bottom-0 left-0 p-5 shadow-md bg-white rounded-t-lg    ${IsDarkMode ? "dark-mode" : ""}`}>
                <ul className="space-y-2 ">
                   
                    <li>
                        <AccountCircleIcon className="w-5 h-5 "/>
                        <span className="font-bold ml-2 ">Account</span>
                        <span className="bg-blue-600 w-full h-1 block"> </span>
                        <span className="flex items-center m-1">
                            <img className="h-8 rounded-lg"  alt="account" src="https://www.citypng.com/public/uploads/preview/transparent-hd-white-male-user-profile-icon-11637133256qticy7lqml.png" />
                            <p className="text-red-600 ml-2 font-semibold">Alok Kumar</p>
                        </span>
                    </li>
                </ul>
            </div>
         </div>
    );
};

export default Sidebar;
