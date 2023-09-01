import React, { useState } from 'react';
// import './RecentImage.css'; // Import your CSS file for styling
import image1 from "../Image/1stimage.jpg"
import image2 from "../Image/img-2.jpg"
import image3 from "../Image/image-3.png"
import image4 from "../Image/image-4.jpg"
import image5 from "../Image/image-5.jpg"
import { useTheme } from '../Utills/Themeconatext';

const RecentImage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [image1, image2, image3, image4, image5];

  const prevImage = () => {
    setCurrentImage((prev) => {
      if (prev === 0) {
        return images.length - 1; 
      } else {
        return prev - 1; 
      }
    });
  };
  
 
  const nextImage = () => {
    setCurrentImage((prev) => {
      if (prev === images.length - 1) {
        return 0; 
      } else {
        return prev + 1; 
      }
    });
  };
  const { IsDarkMode } = useTheme();
  return (
    <div className= {`grid grid-cols-6 m-5 shadow-lg bg-gray-200  ${IsDarkMode ? "dark-mode" : ""}`}>
      <div className="w-96 m-5 ">
        <h1 className='font-bold  flex justify-center'>Recent_Camera_Alert</h1>
        <div className="flex justify-center">
          <div className="prev my-24" onClick={prevImage}>
            &#10094;
          </div>
          <div className="image-1 w-96">
            <img className='w-auto h-64' src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
          </div>
          <div className="next my-24 " onClick={nextImage}>
            &#10095;
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentImage;
