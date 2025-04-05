import React from "react";

const ImageWithTextOverlay = () => {
  const imageContainerStyle = {
    position: "relative",
    width: "100%",
    height: "600px", // Set the height of the image container
    overflow: "hidden",
    marginTop: "30px",
  };

  const imageTextStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
    zIndex: 1, // Ensure the text appears above the image
  };

  return (
    <div style={imageContainerStyle}>
      {/* Background image */}
      <img
        src="https://www.glassdoor.com/assets/images/awards/indexCover.png"
        alt="Background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      {/* Text over the image */}

      <div style={imageTextStyle}>
        <br></br>
        <h2>What brings you here today?</h2>
        <input type="radio" id="option1" name="options" value="option1" />
        <label htmlFor="option1">looking for a job right now</label>
        <br />
        <input type="radio" id="option2" name="options" value="option2" />
        <label htmlFor="option2">looking for employee</label>
        <br />
        <input type="radio" id="option3" name="options" value="option3" />
        <label htmlFor="option3">I am just browsing</label>
      </div>
    </div>
  );
};

export default ImageWithTextOverlay;
