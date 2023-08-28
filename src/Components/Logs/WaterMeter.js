import React from "react";
import "./WaterMeter.css";
import Header from "../Header";
import Sidebar from "../sidebar";
import SensorsIcon from '@mui/icons-material/Sensors';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import PortableWifiOffIcon from '@mui/icons-material/PortableWifiOff';
import WaterMeterUserTable from "./WaterMeteruserTable";
import WaterMeterGraoh from "./WaterMeterGraph";

const WaterMeter = () => {


  return (
    <div className="WaterMeter">
      <Header />
      <div className="Content">
        <Sidebar />
        <div className="MainContainer">
          <div className="drop-down shadow-lg ">
           <select className="select">
            <option>All Zone</option>
            <option>Zone1</option>
            <option>Zone1</option>
            <option>Zone1</option>
            <option>Zone1</option>
            <option>Zone1</option>
            <option>Zone1</option>
           </select>
           <select className="select mx-20">
            <option>All Sensor</option>
            <option>Sensor1</option>
            <option>Sensor1</option>
            <option>Sensor1</option>
            <option>Sensor1</option>
            <option>Sensor1</option>
            <option>Sensor1</option>
           </select>
          </div>
          <div className="Boxes">
            <div className="box-1 Details shadow-lg bg-gray-200">
              <h1  className="text-center text-3xl font-bold"> Details</h1>
              <div className="BoxesDetails">

             <div className="flex gap-28 p-2 ">
                <div className="shadow-md h-20 w-44 rounded-2xl ">
                    <h1 className="text-xl font-medium mx-2">No of Sensor <SensorsIcon/></h1>
                    <div className=" shadow-sm h-14  rounded-2xl bg-gray-300  ">
                       <h1 className="font-semibold text-2xl text-center p-3 text-blue-900">212</h1>
                    </div>
                </div >
                <div className="shadow-md h-20  w-44 rounded-2xl">
                    <h1 className="text-xl font-medium mx-2">Zone Name  <SensorsIcon/></h1>
                    <div className=" shadow-sm h-14  rounded-2xl bg-gray-300  ">
                       <h1 className="font-semibold text-2xl text-center p-3 text-blue-900">212</h1>
                    </div>
                </div >
              </div>
              <div className="flex gap-28 p-2 ">
                <div className="shadow-md h-20 w-44 rounded-2xl">
                    <h1 className="text-xl font-medium mx-2">No of Online <OnlinePredictionIcon/></h1>
                    <div className=" shadow-sm h-14  rounded-2xl bg-gray-300  ">
                       <h1 className="font-semibold text-2xl text-center p-3 text-blue-900">212</h1>
                    </div>
                </div >
                <div className="shadow-md h-20  w-44 rounded-2xl">
                    <h1 className="text-xl font-medium mx-4 ">No of Offline <PortableWifiOffIcon/></h1>
                    <div className=" shadow-sm h-14  rounded-2xl bg-gray-300  ">
                       <h1 className="font-semibold text-2xl text-center p-3 text-blue-900">212</h1>
                    </div>
                </div >
              </div>
              </div>
            </div>
            <div className="box-1 Details shadow-lg bg-gray-200">
            <h1  className="text-center text-2xl font-bold">Avg Value</h1>
            <div className="flex gap-8">
                <div className="shadow-lg w-40 h-40 rounded-2xl">
                    <h1 className="font-bold text-xl text-center text-blue-900 p-5">PH</h1>
                    <h1 className="font-bold text-4xl text-center text-blue-900 p-5">7</h1>
                </div>
              
                <div className="shadow-lg w-40 rounded-2xl">
                    <h1 className="font-bold text-xl text-center text-blue-900 p-5">Turbidity</h1>
                    <h1 className="font-bold text-4xl text-center text-blue-900 p-5">75</h1>
                 </div>
                 <div className="shadow-lg w-40 rounded-2xl">
                    <h1 className="font-bold text-xl text-center text-blue-900 p-5"> Conductivity</h1>
                    <h1 className="font-bold text-4xl text-center text-blue-900 p-5">71</h1>
                 </div>
            </div>
            </div>
            <div className="box-1 Details shadow-lg bg-gray-200">
            <h1  className="text-center text-2xl font-bold">Recent Alert</h1>
            </div>
          </div>
          <div className="Boxes">
            <div className="box-2 maxMeter shadow-lg bg-gray-200">
            <h1  className="text-center text-xl font-bold">MAX PH</h1>
            </div>
            <div className="box-2 maxMeter shadow-lg bg-gray-200">
            <h1  className="text-center text-xl font-bold">MAX PH</h1>
            </div>
            <div className="box-2 maxMeter shadow-lg bg-gray-200">
            <h1  className="text-center text-xl font-bold">MAX PH</h1>
            </div>
            <div className="box-2 maxMeter shadow-lg bg-gray-200">
            <h1  className="text-center text-xl font-bold">MAX PH</h1>
            </div>
          </div>
          <div className="Boxes1">
            <div className="box-3 Graph shadow-lg bg-gray-200">
            <h1  className="text-center text-xl font-bold">TABLE</h1>
            <WaterMeterUserTable/>
            </div>
            <div className="box-3 Graph shadow-lg bg-gray-200">
              <h1  className="text-center text-xl font-bold">GRAPH</h1>
              <WaterMeterGraoh/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterMeter;
