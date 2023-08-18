

import CameralogsMaintain from "./CameralogsMaintain";
import Sidebar from "./sidebar";

const cameralogsdashboard=()=>{
    return (
        <div className="flex">
            <Sidebar/>
            <CameralogsMaintain/>
        </div>
    )
}
export default cameralogsdashboard;