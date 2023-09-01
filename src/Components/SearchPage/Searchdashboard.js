import React from "react";
import Sidebar from "../Utills/sidebar";
import Maintainsearchdashboard from "./Mainatinsearchdasb";
import Header from "../Utills/Header";

const Searchdashboard = () => {
  return (
    <div>
      <Header/>
    <div className="flex">
      <Sidebar />
      <Maintainsearchdashboard />
    </div>
    </div>
  );
};

export default Searchdashboard;
