import React from 'react';
import VideoList from '../DashBord/VideoList';
import ProcessedVideos from'../DashBord/ProcessedVideos'
function Videos(props){
    console.log(props,1)
    return(
    <div className='videos'>
        <ProcessedVideos/>
         <VideoList videos={props.videos} onVideoSelect={props.onVideoSelect} />
    </div>
    )
}
export default Videos