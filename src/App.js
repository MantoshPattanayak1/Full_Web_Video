import React from "react";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import Store from "./Components/Utills/store";
import Body from "./Components/Body";
import { ThemeProvider } from "./Components/Utills/Themeconatext";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Searchdashboard from "./Components/Searchdashboard";
import ZoneDashboard from "./Components/ZoneDashboard";
import Cameralogsdashboard from "./Components/CameraLogdash";
import SensorLogsDashboard from "./Components/sensorLogsDashbord";
import EditProfile from "./Components/EditProfile";

function App() {
  return (
    <Provider store={Store}>
      <ThemeProvider>
        <div className="App">
          <Header />
          <Outlet />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export const appRout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
        path: "/Cameralogsdashboard",
        element: <Cameralogsdashboard />,
      },
      {
        path: "/SensorLogsDashboard",
        element: <SensorLogsDashboard />,
      },
      {
        path: "/EditProfile",
        element: <EditProfile />,
      },
    ],
  },
]);

export default App;
