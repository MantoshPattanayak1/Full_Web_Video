import React from "react";
import { Provider } from "react-redux";
import Store from "./Components/Utills/store";
import { ThemeProvider } from "./Components/Utills/Themeconatext";
import { createBrowserRouter, Outlet, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Body from "./Components/Body";
import Searchdashboard from "./Components/Searchdashboard";
import ZoneDashboard from "./Components/ZoneDashboard";
import SensorLogsDashboard from "./Components/sensorLogsDashbord";
import EditProfile from "./Components/EditProfile";
import AddSensor from "./Components/AddSensor";
import AddCamera from "./AddCamera";
import WrongParking from "./Components/WrongParking";
import CrowdAlert from "./Components/CrowdAlert";
import AddZone from "./AddZone";
import AirAlerts from "./pages/AirAlerts";
import WaterMeter from "./Components/Logs/WaterMeter";
import './App.css'
import LiveVideo from "./pages/LiveVideo";
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
    ],
  },
];

export const appRout = createBrowserRouter(routes);

export default App;
