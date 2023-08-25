import React from "react";
import Sidebar from "./sidebar";
import Maintainsearchdashboard from "./Mainatinsearchdasb";
import Header from "./Header";

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
