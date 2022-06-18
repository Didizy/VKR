import React, { useState, useEffect } from "react";
import axios from "axios";
import Webcam from "react-webcam";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import MapIcon from "@mui/icons-material/Map";
import { Button, IconButton, Link } from "@mui/material";
import { Box, style } from "@mui/system";
import { NavLink, useLocation } from "react-router-dom";
import { Paper } from "@mui/material";
import { Container } from "@mui/system";

function LocationModal() {
  const [imgPath, setImgPath] = useState("");

  const test = async () => {
    await axios({
      method: "get",
      url: `${global.local_path}/api/images/`,
      // url: "http://127.0.0.1:8000/api/images/",
      // url: "https://didizy.pythonanywhere.com/api/images/",
    }).then((response) => {
      setImgPath(global.img_path + response.data);
      console.log(imgPath);
    });
  };

  const location = useLocation();

  return (
    <div>
      <Container
        maxWidth
        component={Paper}
        sx={{ p: 0.2, textAlign: "center", zIndex: 5, mb: 2 }}
      >
        <h2>Местоположение</h2>{" "}
      </Container>
      <Container maxWidth>
        {/* <Button onClick={test}>Test</Button>
        <img src={imgPath} alt="" class="map_img" />
        {imgPath} */}
        {console.log(location.state.name)}
        <h4 class="map_name">{location.state.name}</h4>
        <img src={location.state.path} alt="" class="map_img" />
        <Container sx={{ textAlign: "right" }}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button>Назад</Button>
          </NavLink>
        </Container>
      </Container>
    </div>
  );
}

export default LocationModal;
