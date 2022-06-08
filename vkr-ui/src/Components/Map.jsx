import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";

function Map() {
  return (
    <div>
      <Container maxWidth>
        <Container>
          <img src="imgs/map_d.jpg" alt="" class="map_img" />
        </Container>
        <Container>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button>Назад</Button>
          </NavLink>
        </Container>
      </Container>
    </div>
  );
}

export default Map;
