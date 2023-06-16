import React from "react";
import Facebook from "../../../../../assets/icon/Facebook";
import Twitter from "../../../../../assets/icon/Twitter";
import YouTube from "../../../../../assets/icon/YouTube";
import Instagram from "../../../../../assets/icon/Instagram";
import Phone from "../../../../../assets/icon/Phone";
import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import "../css/header.css";

export const NavbarTop = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [antive, setAntive] = useState(false);
  const hacdleClick = () => {
    setAntive(!antive);
  };
  return (
    <Container
      style={{
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "5px",
        paddingBottom: "5px",
        alignItems: "center",
        marginTop: "0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
        <div className="NavbarTop__icon-container">
          <div>
            <a href="{NavbarTop}">
              <Facebook />
            </a>
          </div>
          <div>
            <a href="#">
              <Twitter />
            </a>
          </div>
          <div>
            <a href="#">
              <YouTube />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/notlolatyyy/">
              <Instagram />
            </a>
          </div>
        </div>
        <a href="#">
          <div className="NavbarTop__phone-img">
            <Phone />
            <Typography className="NavbarTop__phone-num">
              (+098)7654321
            </Typography>
          </div>
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <a href="#">
          <Typography className="NavbarTop__text">Settings</Typography>
        </a>

        <Button onClick={hacdleClick} variant="text" style={{ color: "white" }}>
          {antive ? "RUB ₽" : "USD $"}
        </Button>

        <Button onClick={handleClick} variant="text" style={{ color: "white" }}>
          {active ? "Russian" : "English"}
        </Button>
      </div>
    </Container>
  );
};
