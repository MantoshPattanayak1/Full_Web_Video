import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileDropdown=()=>{
    const[Isopen , setIsopen]=useState(false);
   

    const toggleDropdown=()=>{
        setIsopen(!Isopen)

    }
    return (

        <div >
      
            <button className="h-10 bg-slate-50 rounded-full" onClick={toggleDropdown}          >
                   <img className="h-10 rounded-full" alt="profile" src="https://d1k5j68ob7clqb.cloudfront.net/processed/thumb/S1Yc7F14OY0nt2uB50.png" />
           </button>
           {Isopen && (
            <div className="absolute right-0 mt-2 bg-white shadow-md">
                <div className="bg-gray-100 w-64 py-4 px-6 shadow-md rounded-md">
                    <img className="h-20 mx-auto rounded-full" alt="profile_img" src="https://booleanstrings.com/wp-content/uploads/2021/10/profile-picture-circle-hd.png" />
                       <h1 className="text-center text-xl font-semibold mt-4 text-blue-900">Alok Kumar</h1>
                             <Link to="#" className="flex items-center py-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200 ease-in-out">
                          <PersonIcon className="w-5 h-5 mr-2 " />
                                     <span className="text-sm">Profile</span>
                       </Link>
                     
                    <Link to="#" className="flex items-center py-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200 ease-in-out">
                     <LogoutIcon className="w-5 h-5 mr-2 text-gray-600" />
                         <span className="text-sm">Logout</span>
                         </Link>
                       </div>

          </div>
           )}
          
        </div>

    );

};

export default ProfileDropdown;