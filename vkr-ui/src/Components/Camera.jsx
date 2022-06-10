import React, { useState } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import CameraSwitch from "./CameraSwitch";
import MapIcon from "@mui/icons-material/Map";
import { Button, IconButton, Link } from "@mui/material";
import { Box } from "@mui/system";
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

  const HEIGHT = window.innerHeight - 100;
  const WIDTH = window.innerWidth;

  const videoConstraints = {
    width: WIDTH,
    height: HEIGHT,
    facingMode: "user"
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);

    setSendImg(imageSrc);
    check_img();
  }, [webcamRef]);

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-between"}}>
        <CameraSwitch />
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
        ref={webcamRef}
        videoConstraints={videoConstraints}
        screenshotFormat="image/jpeg"
      />
      <Box>
        <Button onClick={capture}>Capture photo</Button>
      </Box>
    </div>
  );
}

export default Camera;
