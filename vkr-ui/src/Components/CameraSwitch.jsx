import { Button, IconButton } from "@mui/material";
import React from "react";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import Webcam from "react-webcam";

const FACING_MODE_USER = "user";
const FACING_MODE_ENVIRONMENT = "environment";

const videoConstraints = {
  facingMode: FACING_MODE_USER,
};

const CameraSwitch = () => {
  const [facingMode, setFacingMode] = React.useState(FACING_MODE_ENVIRONMENT);

  const handleClick = React.useCallback(() => {
    console.log("Test switch");
    setFacingMode((prevState) =>
      prevState === FACING_MODE_USER
        ? FACING_MODE_ENVIRONMENT
        : FACING_MODE_USER
    );
  }, []);

  return (
    <>
      <IconButton color="primary" onClick={handleClick}>
        <CameraswitchIcon />
      </IconButton>
    </>
  );
};

export default CameraSwitch;
