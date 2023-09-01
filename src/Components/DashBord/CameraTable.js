import React from 'react';
import { useTheme } from "../Utills/Themeconatext";
const UserTable = ({ users }) => {
  const { IsDarkMode } = useTheme();
  return (
    <div className="table-container" >
      <div className="table-scroll">
        <table className= {`table ${IsDarkMode ? 'dark-mode' : ''}`}>
          <thead>
            <tr>
              <th>Device Id</th>
              <th>Device Name</th>
              <th>Zone</th>
              <th>Device Ip</th>
              <th>Device Status</th>
              <th>Event Type</th>
              <th>Date/Time</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
