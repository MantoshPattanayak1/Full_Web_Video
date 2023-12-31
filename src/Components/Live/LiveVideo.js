import React, { useState, useEffect } from 'react';

import VideoPlayer from '../DashBord/VideoPlayer';
import VideoUploader from '../DashBord/VideoUploader';
import Videos from './Videos';
// import './App.css';

function LiveVideo() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [uploadedVideos, setUploadedVideos] = useState([]);
  



  useEffect(() => {
    // Fetch uploaded videos from the backend
    fetch('http://localhost:3001/backend/videos') 
      .then((response) => response.json())
      .then((data) => setUploadedVideos(data))
      .catch((error) => console.error('Error fetching videos:', error));
  }, []);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleVideoUpload = async(video) => {
    
    console.log('video uploaded successfully',video)
    // Add the uploaded video to the state
    setUploadedVideos((prevVideos) => [...prevVideos, video]);
    console.log(uploadedVideos)
    
   
  };
  
  return (
    <div className="app">
      <Videos videos={uploadedVideos} onVideoSelect={handleVideoSelect} />
      <VideoPlayer video={selectedVideo} />
      <VideoUploader onUpload={handleVideoUpload} />
    </div>
  );
}

export default LiveVideo;
