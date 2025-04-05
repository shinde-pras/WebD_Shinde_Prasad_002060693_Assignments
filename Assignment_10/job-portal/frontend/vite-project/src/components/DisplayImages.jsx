// FetchImages.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
function FetchImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/images");
        console.log(response);
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Header />
      {images.map((image, index) => (
        <img
          key={index}
          src={image.path}
          alt={image.filename}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ))}
    </div>
  );
}

export default FetchImages;
