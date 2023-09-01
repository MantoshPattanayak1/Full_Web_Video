import React from "react";
import Sidebar from "../Utills/sidebar";

import Person2Icon from '@mui/icons-material/Person2';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import SensorsIcon from '@mui/icons-material/Sensors';
import Header from "../Utills/Header";

const EditProfile=()=>{
    return (
      <div>
        <Header/>
        <div className="flex parent-edit">
        <Sidebar />
    
        <div className="edit_container">
          <div className="shadow-lg w-72 m-5">
            <h1 className="font-bold text-blue-700">My Profile</h1>
          <div className="profile-section">
       
               <img
                className="profile-image"
                alt="profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTOkHm3_mPQ5PPRvGtU6Si7FJg8DVDtZ47rw&usqp=CAU"
               />
         </div>
         <div className="about">
         <h1 className="text-center text-xl">Alok Kumar</h1>
         <h1 className="text-center text-lg">User</h1>
         <div className="progress-container">
                 <div className="progress-bar"></div>
          </div>

        
        
        
         </div>
       
         <div className="sidebar-profile">
          <ul className="font-bold">
            <li className="text-lg"><Person2Icon/>Edit Profile </li>
            <li><SensorsIcon/>Add sensor</li>
            <li><CameraAltIcon/>Add Camera</li>
            <li><AddLocationAltIcon/>Add Zone</li>
          </ul>

         </div>
             
        </div>
          <form className="edit-form">
           
            <h1 className="font-bold text-lg text-blue-500">Edit Profile</h1>
            <h3 className="float-right mx-6 font-bold">Alok Kumar</h3>
               <div className="progress-container">
             <div className="progress-bar"></div>
                </div>
          <div className="profile_box">
            <div className="name-section">
              <div className="input-wrapper ">
                <label htmlFor="first-name" >First Name</label>
                <input type="text" id="first_name"placeholder="First Name" name="first_name" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last_name" name="last_name" placeholder="Last Name" />
              </div>
            </div>
            <div className="edit-section">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <input type="text" id="email" name="email" placeholder="Email Address : xyz@gmail.com" />
              </div>
            </div>
            <div className="edit-section">
              <label htmlFor="address">Address</label>
              <div className="input-wrapper">
                <input type="text" id="address" name="address" placeholder="Address"/>
              </div>
            </div>
            <div className="edit-section">
              <label htmlFor="address">Contact Number</label>
              <div className="input-wrapper">
                <input type="text" id="contact" name="conact" placeholder="Contact Number Ex-1234567890"/>
              </div>
            </div>
            <div className="input-wrapper">
                <label htmlFor="last-name">Sate</label>
                <input type="text" id="last_name" name="last_name" placeholder="state Ex-Bihar"/>
              </div>
            
            <div className="edit-section">
              <label htmlFor="email">Password</label>
              <div className="input-wrapper">
                <input type="text" id="password" name="password"placeholder="Password Ex-qakijwiosjwo" />
              </div>
            </div>
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
      </div>

    );
};


export default EditProfile;