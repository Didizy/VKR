import React, { useState } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import CameraSwitch from "./CameraSwitch";
import { Button, Link } from "@mui/material";
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

  const HEIGHT = window.innerHeight - 50;
  const WIDTH = window.innerWidth;

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);

    setSendImg(imageSrc);
    check_img();
  }, [webcamRef]);

  return (
    <div>
      {(console.log(WIDTH), console.log(HEIGHT))}
      <Webcam
        audio={false}
        width={WIDTH}
        height={HEIGHT}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <Box>
        <CameraSwitch />
        <NavLink to="map" style={{ textDecoration: "none" }}>
          <Button>Карта</Button>
        </NavLink>
        <Button onClick={capture}>Capture photo</Button>
      </Box>
    </div>
  );
}

export default Camera;
