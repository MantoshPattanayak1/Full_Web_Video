import React from 'react';
// import Nav from '../components/Nav'
import CircularProgressBar from '../../DashBord/CircularProgressBar';

import Header from '../../Utills/Header';
import Sidebar from '../../Utills/sidebar';

import {Bar,BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip
} from "recharts";

function AirAlerts() {
  const data = [
    { Time: "09 AM", AQI: 20 },
    { Time: "10 AM", AQI: 30 },
    { Time: "12 PM", AQI: 40 },
    { Time: "01 PM", AQI: 50 },
    { Time: "02 PM", AQI: 60 },
    { Time: "03 PM", AQI: 70 },
    { Time: "04 PM", AQI: 80 },
    { Time: "05 PM", AQI: 90 },
    { Time: "06 PM", AQI: 90 },
    { Time: "07 PM", AQI: 98 },
    { Time: "08 PM", AQI: 99 },
    { Time: "09 PM", AQI: 98 },
    { Time: "06 AM", AQI: 90 },
    { Time: "07 AM", AQI: 98 },
    { Time: "08 AM", AQI: 99 },
   
  ];


  return (
    <div >
      <Header/>

    <div className='Alerts' >
    <div className='above'>
      <div style={{margin:"2% 0% 2% 2%"}}><h1>Air Quality Alerts</h1></div>
     
     <div className='above-two'>

     <select name="zone" id="zone" style={{borderRadius: "0.5rem", padding:"0.15rem"}}>
  <option value="">zone</option>
</select>


<select name="device_type" id="device-"  style={{borderRadius: "0.5rem",marginLeft:"0.4rem" , padding:"0.15rem"}}>
  <option value="">Device Type</option>
</select>

<select name="device_name" id="device-name"  style={{borderRadius: "0.5rem",marginLeft:"0.4rem", marginRight:"0.8rem" , padding:"0.15rem"}}>
  <option value="">Device Name</option>
</select>
     </div>
      
    

    </div>
    {/* <div className="nav_one">
      <Nav></Nav>
    </div> */}



    <div className='main_one'>
    <div className='all_details'>
      <div><CircularProgressBar/></div>
    </div>
    <div className='zone_details' style={{padding:"0.5rem"}}>
    <h4 style={{ textAlign:'center', marginBottom:"1.2rem"}}>Zone Details</h4>
    <div>
      <h4 >Zone name :</h4>
      <h4>Latitude :</h4>
      <h4>Longitude :</h4>


    </div>


    </div>

    <div className='device_details'>
       <h4 style={{ textAlign:'center', marginBottom:"1.2rem"}}>Device Details</h4>
    <div>
      <h4 >Device name :</h4>
      <h4>Device Type :</h4>
      <h4>IP:</h4>
      <h4>MAC:</h4>


    </div>

    </div>
    </div>
   


    <div className='main_two'>
      <div className='main_two_one'>
        <div className='main_two_one_inside1'>
          <h4>Air Quality</h4>
        </div>
        <div className='main_two_one_inside2'> 
          <input type="date" id="Calendar" name="Calendar"/> 
        </div>
        <div className='main_two_one_inside3'>
        <select name="Daily" id="daily" style={{borderRadius: "0.5rem", padding:"0.15rem"}}>
  <option value="">Daily</option>
</select>


<select name="Weekly" id="weekly"  style={{borderRadius: "0.5rem",marginLeft:"0.4rem" , padding:"0.15rem"}}>
  <option value="">Weekly</option>
</select>

<select name="Monthly" id="Monthly"  style={{borderRadius: "0.5rem",marginLeft:"0.4rem", marginRight:"0.8rem" , padding:"0.15rem"}}>
  <option value="">Monthly</option>
</select>
        </div>
        </div>
      <div className='main_two_two'>
        <div className='mtt1'></div>
        <div  className='mtt2'></div>
        <div className='mtt3'></div>
        <div className='mtt4'></div>
        <div className='mtt5'></div>
      </div>
      <div className='main_two_three'>
        
        
      </div>

    </div>

    <div className='main_three'>
    <BarChart
          width={1000}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="Time"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="AQI" fill="#9dd7ef " background={{ fill: "#eee" }} />
        </BarChart>
  </div>


    </div>
    </div>
  );
}

export default AirAlerts;