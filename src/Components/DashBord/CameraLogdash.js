

import CameralogsMaintain from "../CameralogsMaintain";
import Sidebar from "./sidebar";
import Header from "./Header";

const cameralogsdashboard=()=>{
    return (
        <div>
            <Header/>
        <div className="flex">
            <Sidebar/>
            <CameralogsMaintain/>
        </div>
        </div>
    )
}
export default cameralogsdashboard;