
import React from "react";
import { useTheme } from "../Utills/Themeconatext";

import InfoIcon from '@mui/icons-material/Info';
const ZoneTable=({users})=>{
    const { IsDarkMode } = useTheme();
    return(

        <div className=  {`table-Zone-container shadow-lg ${IsDarkMode ? 'dark-mode' : ''}`}> 
        <div className= {`table-Zone-scroll ${IsDarkMode ? 'dark-mode' : ''}`}>
          <table className= {`table1 ${IsDarkMode ? 'dark-mode' : ''}`}>
            <thead>
              <tr>
                <th>Device Id</th>
                <th>Device Name</th>
                <th>Zone</th>
                <th>Device Ip</th>
                <th>Device Status</th>
                <th>Event Type</th>
                <th>Date/Time</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.Device}</td>
                  <td>{user.DeviceName}</td>
                  <td>{user.Zone}</td>
                  <td>{user.Deviceip}</td>
                  <td>{user.DeviceStatus}</td>
                  <td>{user.EventType}</td>
                  <td>{user.Date}</td>
                  <th className="flex items-center justify-center ">
                      <a href="/new-page-url">
                          <InfoIcon className="text-blue-500 hover:text-red-700 cursor-pointer" />
                        </a>
                 </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
}
export default ZoneTable;