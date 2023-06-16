import React from "react";
import FirstAd from "../../../../../assets/img/section-first-ad.jpg";
import SecondAd from "../../../../../assets/img/section-second-ad.jpg";
import ThirdAd from "../../../../../assets/img/section-third-ad.jpg";
import "./ad.css";
import { Container } from "@mui/material";

export const Ad = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("ad");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container
      id="ad"
      style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div className="cool-hover">
        <a style={{ cursor: "pointer" }} href={handleClickScroll}>
          <img style={{ width: "500px" }} src={FirstAd} alt="first ad" />
        </a>
      </div>
      <div className="cool-hover">
        <a style={{ cursor: "pointer" }} href={handleClickScroll}>
          <img style={{ width: "239.5px" }} src={SecondAd} alt="first ad" />
        </a>
      </div>
      <div className="cool-hover">
        <a style={{ cursor: "pointer" }} href={handleClickScroll}>
          <img style={{ width: "239.5px" }} src={ThirdAd} alt="first ad" />
        </a>
      </div>
    </Container>
  );
};
