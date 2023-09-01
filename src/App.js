import React from "react";
import { Provider } from "react-redux";
import Store from "./Components/Utills/store";
import { ThemeProvider } from "./Components/Utills/Themeconatext";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Login from "./Components/LogingPage/Login";
import SignUp from "./Components/LogingPage/SignUp";
import Body from "./Components/DashBord/Body";
import Searchdashboard from "./Components/SearchPage/Searchdashboard";
import ZoneDashboard from "./Components/ZonePage/ZoneDashBord";
import SensorLogsDashboard from "./Components/DashBord/sensorLogsDashbord";
import EditProfile from "./Components/ProfilePage/EditProfile";
import AddSensor from "./Components/ProfilePage/AddSensor";
import AddCamera from "./Components/ProfilePage/AddCamera";
import WrongParking from "./Components/AlertPage/CrowdAlert/WrongParking/WrongParking";
import CrowdAlert from "./Components/AlertPage/CrowdAlert/CrowdAlert";
import AddZone from "./Components/ProfilePage/AddZone";
import AirAlerts from "./Components/AlertPage/AirQuality/AirAlerts";
import './App.css'
import LiveVideo from "./Components/Live/LiveVideo";
import AirQuality from "./Components/Logs/AirQuality";
import WaterMeter from "./Components/Logs/WaterMeter";
import LevelMeter from "./Components/Logs/LevelMeter";
import EnergyMeter from "./Components/Logs/EnergyMeter";
import FireDashBord from "./Components/AlertPage/CrowdAlert/Fire/FireDashBord";
import WaterQuality from "./Components/AlertPage/WaterQuality/WaterQuality";
import Error from "./Components/Utills/Error";

function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider>
        <div className="App">

          <Outlet />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path: "",
        index: true,
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: '/MainDashboard',
        element: <Body />,
      },
   
      {
        path: "/Searchdashboard",
        element: <Searchdashboard />,
      },
      {
        path: "/ZoneDashboard",
        element: <ZoneDashboard />,
      },
     
      {
        path: "/SensorLogsDashboard",
        element: <SensorLogsDashboard />,
      },
      {
        path: "/EditProfile",
        element: <EditProfile />,
      },
      {
        path: "/AddSensor",
        element: <AddSensor />,
      },
      {
        path: "/AddCamera",
        element: <AddCamera />,
      },
      {
        path: "/AddZone",
        element: <AddZone />,
      },
      {
        path: "/wrongParking",
        element: <WrongParking />,
      },
      {
        path: "/AirAlerts",
        element:<AirAlerts />,
      },

      {
        path: "/CrowdAlert",
        element: <CrowdAlert />,
      },
      {
        path: "/LiveVideo",
        element: <LiveVideo />,
      },
      {
        path: "/WaterMeter",
        element: <WaterMeter />,
      },
      {
        path: "/AirQuality",
        element: <AirQuality />,
      },
      {
        path: "/EnergyMeter",
        element: <EnergyMeter />,
      },
      {
        path: "/LevelMeter",
        element: <LevelMeter />,
      },
      {
        path: "/FireDashBord",
        element: <FireDashBord/>,
      },
      {
        path: "/WaterQuality",
        element: <WaterQuality/>,
      },
    ],
  },
];

export const appRout = createBrowserRouter(routes);

export default App;
