import React, { useState, useEffect } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import MapIcon from "@mui/icons-material/Map";
import { Button, IconButton, Link } from "@mui/material";
import { Box, style } from "@mui/system";
import { NavLink } from "react-router-dom";

function Camera() {
  const [sendImg, setSendImg] = useState("");

  const check_img = async () => {
    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/images/",
      data: {
        img: sendImg,
      },
    }).then((response) => {
      alert(response.data);
    });
  };

  const HEIGHT = window.innerHeight - 80;
  const WIDTH = window.innerWidth;
  const [height, setHeight] = useState(window.innerHeight - 80);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setHeight(window.innerHeight - 80);
    setWidth(window.innerWidth);
  });

  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";

  const [facingMode, setFacingMode] = useState(FACING_MODE_ENVIRONMENT);

  const videoConstraints = {
    width: width,
    height: height,

    facingMode: FACING_MODE_ENVIRONMENT,
  };

  const switchCamera = React.useCallback(() => {
    console.log("Test switch");
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
    console.log(facingMode);
  }, []);

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);

    setSendImg(imageSrc);
    check_img();
  }, [webcamRef]);

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton color="primary" onClick={switchCamera}>
          <CameraswitchIcon />
        </IconButton>
        <NavLink to="map" style={{ textDecoration: "none" }}>
          <IconButton color="primary">
            <MapIcon />
          </IconButton>
        </NavLink>
      </Box>
      <Webcam
        audio={false}
        width={WIDTH}
        height={HEIGHT}
        className="webcamera"
        ref={webcamRef}
        forceScreenshotSourceSize="true"
        videoConstraints={{ ...videoConstraints, facingMode}}
        screenshotFormat="image/jpeg"
      />
      <Box>
        <Button onClick={capture}>Capture photo</Button>
      </Box>
    </div>
  );
}

export default Camera;
