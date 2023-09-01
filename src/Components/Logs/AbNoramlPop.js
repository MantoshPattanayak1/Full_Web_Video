import React from "react";
import "./WaterMeter.css";
const AbNormally = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-container ">
        <div className="scroll">
             <h1 className="meter_water_name   font-extrabold text-xl">AbNormal Data here</h1>
                     
               <button className="close_btn mx-20" onClick={onClose}>Close X</button>
       </div>
    </div>
  );
};

export default AbNormally;
