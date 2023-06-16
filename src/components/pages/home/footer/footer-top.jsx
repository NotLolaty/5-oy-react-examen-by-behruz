import React, { useState } from "react";
import Logo from "../../../../assets/img/Logo.png";
import {
  Container,
  Typography,
  Stack,
  TextField,
  Button,
  Drawer,
} from "@mui/material";
import Instagram2 from "../../../../assets/icon/Instagram2";
import YouTube2 from "../../../../assets/icon/YouTube2";
import Twitter2 from "../../../../assets/icon/Twitter2";
import Facebook2 from "../../../../assets/icon/Facebook2";

export const FooterTop = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("footer-top");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <Container id="footer-top">
      <div
        style={{
          display: "flex",
          placeItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "400px",
          }}
        >
          <a href={handleClickScroll}>
            <img src={Logo} alt="logo" />
          </a>
          <Typography
            className="cool-hover-text footer-text"
            marginTop={"15px"}
            marginBottom={"15px"}
          >
            We are a team of professional designers and developers that create
            high quality wordpress plugins, Html, React Template.
          </Typography>
          <Stack direction="row" spacing={2}>
            <a href="https://www.instagram.com/notlolatyyy/">
              <Instagram2 />
            </a>
            <a href="https://www.youtube.com/channel/UCBJ2MRNst3ujERNw0CEA0yg">
              <YouTube2 />
            </a>
            <a href="https://twitter.com/_NotLolaty">
              <Twitter2 />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100067197635579">
              <Facebook2 />
            </a>
          </Stack>
        </div>
        <div>
          <ul>
            <li>
              <Typography className="cool-hover-text footer-text">
                Information
              </Typography>
              <span
                style={{
                  width: "50px",
                  height: "2.5px",
                  margin: "15px 0px",
                  display: "block",
                  background: "rgb(90, 90, 201)",
                }}
              ></span>
            </li>
            <li>
              <a
                className="cool-hover-text footer-text"
                href={handleClickScroll}
              >
                <Typography>About Us</Typography>
              </a>
            </li>
            <li style={{ margin: "8px 0px" }}>
              <a
                className="cool-hover-text footer-text"
                href={handleClickScroll}
              >
                <Typography>Payment</Typography>
              </a>
            </li>
            <li>
              <a
                className="cool-hover-text footer-text"
                href={handleClickScroll}
              >
                <Typography>Contact Us</Typography>
              </a>
            </li>
            <li style={{ margin: "8px 0px" }}>
              <a
                className="cool-hover-text footer-text"
                href={handleClickScroll}
              >
                <Typography>Stores</Typography>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <Typography className="cool-hover-text footer-text">
                Social Links
              </Typography>
              <span
                style={{
                  width: "50px",
                  height: "2.5px",
                  margin: "15px 0px",
                  display: "block",
                  background: "rgb(90, 90, 201)",
                }}
              ></span>
            </li>
            <li>
              <a
                className="cool-hover-text footer-text"
                href={handleClickScroll}
              >
                <Typography>New Products</Typography>
              </a>
            </li>
            <li style={{ margin: "8px 0px" }}>
              <a
                className="cool-hover-text footer-text"
                href={handleClickScroll}
              >
                <Typography>Best Sales</Typography>
              </a>
            </li>
            <li>
              <a
                className="cool-hover-text footer-text"
                href={handleClickScroll}
              >
                <Typography>Login</Typography>
              </a>
            </li>
            <li style={{ margin: "8px 0px" }}>
              <a
                className="cool-hover-text footer-text"
                href={handleClickScroll}
              >
                <Typography>My Account</Typography>
              </a>
            </li>
          </ul>
        </div>
        <div style={{ width: "330px" }}>
          <Typography className="cool-hover-text footer-text">
            Newsletter
          </Typography>
          <span
            style={{
              width: "50px",
              height: "2.5px",
              margin: "15px 0px",
              display: "block",
              background: "rgb(90, 90, 201)",
            }}
          ></span>
          <Typography className="cool-hover-text footer-text">
            Subscribe to the TheFace mailing list to receive update on new
            arrivals, special offers and other discount information
          </Typography>
          <div className="box">
            <form className="box">
              <TextField
                id="standard-basic"
                label="Your Email"
                variant="outlined"
                style={{ width: "310px" }}
              />
              <Button
                style={{ left: "-73px" }}
                type="submit"
                variant="contained"
              >
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
