

import { useTheme } from "../Utills/Themeconatext";
const WaterMeterTable=({users})=>{
    const { IsDarkMode } = useTheme();
    return(

        <div className=  {`table-container shadow-lg ${IsDarkMode ? 'dark-mode' : ''}`}> 
        <div className= {`table-scroll ${IsDarkMode ? 'dark-mode' : ''}`}>
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
    )
}
export default WaterMeterTable;