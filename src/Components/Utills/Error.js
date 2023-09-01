// Error.jsx
import React from "react";
import { useRouteError } from "react-router-dom";
import ErrorImg from "../Image/Error.jpg"

import "./Error.css";

const Error = () => {
  const err = useRouteError();
  console.log(err)

  return (
    <div className="error-container">
        <div className="Img">
           <img className="rounded-3xl" src={ErrorImg} alt="React Logo" />
       </div>
       <h1 className="text-center text-9xl text-red-600"> 404</h1>
       <h1 className="text-center text-5xl ">Oops! Something is wrong.</h1>
       <h1 className="text-center text-red-700 font-bold">The URL is broken.</h1>
      
  </div>
  );
};

export default Error;
