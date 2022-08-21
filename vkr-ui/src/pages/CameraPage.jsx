import React, { useState } from "react";
import axios from "axios";
import Camera from "../Components/Camera";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

function CameraPage() {
  return (
    <div style={{ position: "fixed", scale: "none" }}>
      <Box component={Paper} sx={{ textAlign: "center" }}>
        <Camera />
      </Box>
    </div>
  );
}

export default CameraPage;
