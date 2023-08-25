
import React from "react";
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Cameralogsusertable from "./Cameralogsusertable";

const data = [
  {
    name: 'Page A',
    uv: 4000,

    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,

    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,

    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,

    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const cameralogsMaintain=()=>{
    return(
      <div className=" body-camera  ">
        <div className="flex ">
        <div className="dashboard-graph  shadow-lg m-1 p-2 ">
           <h1 className="flex justify-center font-bold">Camera Logs</h1>
           <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#3498db" /> 
<Bar dataKey="uv" stackId="a" fill="#2980b9" /> 
        </BarChart>
      </ResponsiveContainer>
        </div>
        <div className="zone-camera-details  m-1 p-2   ">
       

            <div className="cameralogs_zone_deatils   m-1 p-2 rounded-lg">
              <h1 className="font-semibold text-xl  text-center">Zone Camera Details</h1>

              <div className="flex flex-col gap-4">
                <div className="p-3 bg-white rounded-lg text-gray-800">
                      <h2 className="text-xl font-semibold ">Camera No</h2>
      
                  </div>

                 <div className="p-3 bg-white rounded-lg text-gray-800">
                     <h2 className="text-xl font-semibold ">Camera Name</h2>
     
                 </div>

            <div className="p-3 bg-white rounded-lg text-gray-800">
             <h2 className="text-xl font-semibold ">Device Id</h2>
      
            </div>
            <div className="p-3 bg-white rounded-lg text-gray-800">
                     <h2 className="text-xl font-semibold ">Ip Address</h2>
     
                 </div>

            <div className="p-3 bg-white rounded-lg text-gray-800">
             <h2 className="text-xl font-semibold ">Mac Address</h2>
      
            </div>
         </div>
</div>
          
         </div>
         </div>
      <div className="flex">
        <div className="cameralogs-table  shadow-lg m-1 p-2">
        <h1 className="font-bold flex justify-center h-16">Camera status Table</h1>
        <Cameralogsusertable/>

        


        
        </div>
        <div className="cameralogs_zone_deatils   shadow-lg m-1 p-2 rounded-lg">
              <h1 className="font-semibold text-xl  text-center">Zone Camera Details</h1>

              <div className="flex flex-col gap-4">
                <div className="p-3 bg-white rounded-lg text-gray-800">
                      <h2 className="text-xl font-semibold ">Zone Name</h2>
      
                  </div>

                 <div className="p-3 bg-white rounded-lg text-gray-800">
                     <h2 className="text-xl font-semibold ">Zone Latitude</h2>
     
                 </div>

            <div className="p-3 bg-white rounded-lg text-gray-800">
             <h2 className="text-xl font-semibold ">Zone Longitude</h2>
      
            </div>
         </div>
</div>

       
       </div>
      </div>
    )
};
export default cameralogsMaintain;