import React, { useState } from "react";
import { Box, Button, Container, Drawer, Typography } from "@mui/material";
import SearchIcon from "../../../../../assets/icon/SearchIcon";
import RecomendationsIcon from "../../../../../assets/icon/RecomendationsIcon";
import WishlistIcon from "../../../../../assets/icon/WishlistIcon";
import CartIcon from "../../../../../assets/icon/CartIcon";
import Logo from "../../../../../assets/img/Logo.png";

export const NavbarBot = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpen1, setIsDrawerOpen1] = useState(false);
  const [isDrawerOpen2, setIsDrawerOpen2] = useState(false);
  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "10px",
      }}
    >
      <a href="#">
        <img src={Logo} alt="Logo" />
      </a>
      <navbar>
        <ul style={{ display: "flex", gap: "40px" }}>
          <li>
            <a href="#">
              <Typography className="cool-hover black-text">HOME</Typography>
            </a>
          </li>
          <li>
            <a href="#">
              <Typography className="cool-hover black-text">SHOP</Typography>
            </a>
          </li>
          <li>
            <a href="#">
              <Typography className="cool-hover black-text">PAGES</Typography>
            </a>
          </li>
          <li>
            <a href="#">
              <Typography className="cool-hover black-text">BLOG</Typography>
            </a>
          </li>
          <li>
            <a href="#">
              <Typography className="cool-hover black-text">
                ADMIN PANEL
              </Typography>
            </a>
          </li>
        </ul>
      </navbar>
      <div className="NavbarBot__imgs">
        <a href="#">
          <Button>
            <SearchIcon />
          </Button>
        </a>
        <a href="#">
          <Button onClick={() => setIsDrawerOpen(true)}>
            <RecomendationsIcon />
          </Button>
        </a>
        <a href="#">
          <Button onClick={() => setIsDrawerOpen1(true)}>
            <WishlistIcon />
          </Button>
        </a>
        <a href="#">
          <Button onClick={() => setIsDrawerOpen2(true)}>
            <CartIcon />
          </Button>
        </a>
      </div>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
          <Typography>Recomendations</Typography>
        </Box>
      </Drawer>
      <Drawer
        anchor="left"
        open={isDrawerOpen1}
        onClose={() => setIsDrawerOpen1(false)}
      >
        <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
          <Typography>Wishlist</Typography>
        </Box>
      </Drawer>
      <Drawer
        anchor="left"
        open={isDrawerOpen2}
        onClose={() => setIsDrawerOpen2(false)}
      >
        <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
          <Typography>Cart</Typography>
        </Box>
      </Drawer>
    </Container>
  );
};
