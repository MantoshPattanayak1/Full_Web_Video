import React from "react";
import Weather from "./weather";
import Sensor from "./Sensor";
import SensorAlert from "./sensorAlert";
import SensorChart from "./sensorChart";
import Weathervalue from "./weathermn";
import Weatherchart from "./weatherchart";
import Recentimage from "./Recentimage";
import Camerastatus from "./CameraStatus";
import Graph from "./Graph";
import SensorChart2 from "./SensorChart-2";
import CameraAlertTable from "./CameraAlertTable";



const Miantain = () => {
 
    return (
        <>
   <div>
          <div className="flex justify-between" >
             <Weather/>
             <Sensor/>
             <SensorChart2/>
        
             <SensorAlert/>
               <SensorChart />
             
           </div>
          <div>
              <Weathervalue/>
           </div>

          <div className=" grid grid-flow-col">
              <Recentimage/>
              <Camerastatus/>
              <Graph/>
              <Weatherchart/>
          </div>
          <div  >
              <CameraAlertTable/>
           </div>

    </div>
        
        </>
       

    );
};
export default Miantain;