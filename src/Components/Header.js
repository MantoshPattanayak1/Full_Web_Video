import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./Utills/appSlice";
import ProfileDropdown from "./UserProfile";
import { useTheme } from "./Utills/Themeconatext";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
const Header = () => {
  const dispatch = useDispatch();
  const { IsDarkMode, ToggleThem } = useTheme();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className= {`p-1 m-3 shadow-lg grid grid-flow-col-dense  justify-between ${IsDarkMode ? "dark-mode" : ""}`}>
      <div className="col-span-1 flex">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-9 m-5 cursor-pointer text-gray-700 bg-slate-50 "
          alt="menu"
            src="https://static.thenounproject.com/png/462023-200.png"
        ></img>

        <img
          className=" h-20 mx-5 "
          alt="logo"
          src="https://soulunileaders.com/wp-content/uploads/2022/04/soul_edited_edited-1.png"
        ></img>
      </div>
      <div className="flex justify-between m-3">
           <div className="m-2">
               < ProfileDropdown />
           </div>
        
           <button className=" mx-2" onClick={ToggleThem}>
            {IsDarkMode ? <WbSunnyIcon/> : <NightsStayIcon/>}
       </button>
      </div>
    </div>
  );
};

export default Header;
