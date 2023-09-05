import React from 'react';
import ReactPlayer from 'react-player'
function VideoPlayer({ video }) {

console.log(video);
  if (!video) {
    return <div className="video-player">No video selected</div>;
    // console.log('Video URL:', video.url);
  }

  return (
    <div className="video-player">
      <h2>{video.title}</h2>
      {console.log(`${video.url}`,"helooo")}
    
       <ReactPlayer url={video.url} controls={true} width="100%" height="auto" />
 
      
    </div>
  );
}

export default VideoPlayer;