
import React from 'react';
import { useTheme } from "./Utills/Themeconatext";
const Zonetableuser= ({ users1 }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { IsDarkMode } = useTheme();
  return (
    <div className="table-container1" >
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
            {users1.map((user1, index) => (
              <tr key={index}>
                <td>{user1.Device}</td>
                <td>{user1.DeviceName}</td>
                <td>{user1.Zone}</td>
                <td>{user1.Deviceip}</td>
                <td>{user1.DeviceStatus}</td>
                <td>{user1.EventType}</td>
                <td>{user1.Date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Zonetableuser;









