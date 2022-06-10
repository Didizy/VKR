import React, { useState } from "react";
import axios from "axios";
import Camera from "../Components/Camera";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function CameraPage() {
  return (
    <div style={{ position: "fixed", scale: "none" }}>
      <Box component={Paper} sx={{ textAlign: "center" }}>
        <Camera />
      </Box>
      {/* <Box>
        <Link to="/map">
          <Button>Карта</Button>
        </Link>
      </Box> */}
    </div>
  );
}

export default CameraPage;
