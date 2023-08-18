


import React from "react";
import { useTheme } from "./Utills/Themeconatext";
import ZoneTable from "./zoneTableuser";
import { PieChart, Pie, Cell, Tooltip} from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
  
  ];
  const COLORS = [ '#00C49F'];
  const COLORS1 = [ '#0088FE'];
const zoneMaintain=()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { IsDarkMode } = useTheme();
    return (

        <div>
       
        <div className="flex m-2 ">
          
             
           <div className={`shadow-lg box-2 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
          <div className="flex items-center h-full">
          <img   className="h-36 rounded-lg" alt="camera_image"         src="https://www.briefcam.com/wp-content/uploads/2020/10/traffic-violations-video-analytics-x1000.jpg"></img>
            <div className="flex-1 flex flex-col items-center justify-center">
               <h1 className="font-bold text-center">Camers 114</h1>
               <div className="flex">
               <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
        
          dataKey="value"
        > 
            
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
        
          dataKey="value"
        >
            
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
     </div>
              </div>
        </div>
        </div>

                
       
          
       
        
        <div className={`shadow-lg box-2 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
          <div className="flex items-center h-full">
              <img className="w-48" alt="aqi" src="https://th.bing.com/th/id/OIP.1L1Mc3M-3yvkPNtPvT4NzwAAAA?pid=ImgDet&w=156&h=156&c=7"></img>
            <div className="flex-1 flex flex-col items-center justify-center">
               <h1 className="font-bold text-center">AQI Sensor 112</h1>
               <div className="flex">
               <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
        
          dataKey="value"
        >
            
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
        
          dataKey="value"
        >
            
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
     </div>
              </div>
        </div>
        </div>



        <div className={`shadow-lg box-2 m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
          <div className="flex items-center h-full">
          <img className="h-40 rounded-lg" alt="water_sensor"     src="https://shop.pall.com/INTERSHOP/static/WFS/PALL-PALLUS-Site/-/PALL/en_US/images/Industrial-Manufacturing/WS18_Product_image.jpg"></img>
            <div className="flex-1 flex flex-col items-center justify-center">
               <h1 className="font-bold text-center">Water Sensor 113</h1>
               <div className="flex">
               <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
        
          dataKey="value"
        >
            
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <PieChart width={150} height={50} >
           <Pie
          data={data}
            cx={100}
          cy={40}
          startAngle={180}
          endAngle={0}
          innerRadius={30}
          outerRadius={45}
          fill="#8884d8"
        //   paddingAngle={5}
        
          dataKey="value"
        >
            
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
     </div>
              </div>
        </div>
        </div>
        
       
         </div>
                  <div className="m-2">
                     <div className={` shadow-lg  table-box m-3 bg-gray-200 ${IsDarkMode ? "dark-mode" : ""}`}>
                         <ZoneTable/>
                        </div>
                  </div>
    </div>
    )
}
export default zoneMaintain;






///**********






// Water
// <img className="h-40 rounded-lg" alt="water_sensor"     src="https://shop.pall.com/INTERSHOP/static/WFS/PALL-PALLUS-Site/-/PALL/en_US/images/Industrial-Manufacturing/WS18_Product_image.jpg"></img>
// <div>






// <img   className="h-40 rounded-lg" alt="camera_image"         src="https://www.securitymagazine.com/ext/resources/Issues/2020/May/video-analytics/SEC0520-Video-Feat-slide1_900px.jpg"></img>