import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./appSlice";
import ProfileDropdown from "../ProfilePage/UserProfile";
import { useTheme } from "./Themeconatext";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./Header.css"; // Make sure to link to your CSS file

const Header = () => {
  const dispatch = useDispatch();
  const { IsDarkMode, ToggleThem } = useTheme();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className={`header ${IsDarkMode ? "dark-mode" : ""}`}>
      <div className="menu-logo-container">
        <img
          onClick={toggleMenuHandler}
          className="menu-icon"
          alt="menu"
          src="https://static.thenounproject.com/png/462023-200.png"
        ></img>

        <img
          className="logo"
          alt="logo"
          src="https://soulunileaders.com/wp-content/uploads/2022/04/soul_edited_edited-1.png"
        ></img>
      </div>
      <div className="profile-theme-container">
        <div className="profile-dropdown">
          <ProfileDropdown />
        </div>

        <button className="theme-toggle" onClick={ToggleThem}>
          {IsDarkMode ? <WbSunnyIcon /> : <NightsStayIcon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
