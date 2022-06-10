import React, { useState } from "react";
import axios from "axios";
import Camera from "../Components/Camera";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
//style={{ position: "fixed", scale: "none" }}

function CameraPage() {
  return (
    <div>
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
