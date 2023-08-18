import { createContext, useState , useContext} from "react";
import { useEffect } from "react";



const Themeconatext=createContext();
export const ThemeProvider=({ children })=>{
  const[IsDarkMode, setIsDarkMode]=useState(false);


  
  useEffect(() => {
    document.body.classList.toggle("dark", IsDarkMode);
  }, [IsDarkMode]);

  const ToggleThem = () =>{
    if(IsDarkMode){
      setIsDarkMode(false);
    }else{
      setIsDarkMode(true);
    }
};


  return (
  <Themeconatext.Provider value={{IsDarkMode,ToggleThem  }}>
    { children }
  </Themeconatext.Provider>
  )
}

export const useTheme = () => {
  return useContext(Themeconatext);
};































// import React, { useState, useEffect } from "react";
// import LightModeIcon from '@mui/icons-material/LightMode';
// import NightsStayIcon from '@mui/icons-material/NightsStay';

// const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     // Apply the 'dark' class to the body when dark mode is enabled
//     document.body.classList.toggle("dark", isDarkMode);
//   }, [isDarkMode]);

//   const handleThemeToggle = () => {
//     // Toggle the theme state
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <button onClick={handleThemeToggle}>
//       {isDarkMode ? <LightModeIcon /> : <NightsStayIcon/>}
//     </button>
//   );
// };

// export default ThemeToggle;
