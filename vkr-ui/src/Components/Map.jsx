import React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";

function Map() {
  return (
    <div>
      <Container
        maxWidth
        component={Paper}
        sx={{ p: 0.2, textAlign: "center", zIndex: 5, mb: 2 }}
      >
        <h2>Карта помещений</h2>{" "}
      </Container>
      <Container maxWidth>
        <img src="imgs/D9.jpg" alt="" class="map_img" />
        <Container sx={{ textAlign: "right" }}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Button>Назад</Button>
          </NavLink>
        </Container>
      </Container>
    </div>
  );
}

export default Map;
