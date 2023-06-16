import React from "react";
import AllCards from "../../../../assets/img/all-cards.png";
import { Container, Typography } from "@mui/material";

export const FooterBot = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("footer-bot");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container
      id="footer-bot"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Typography color={"white"} className="cool-hover-text">
        Copyright © HasThemes. All Rights Reserved
      </Typography>
      <div>
        <a className="cool-hover-text" href={handleClickScroll}>
          <img src={AllCards} alt="all cards" />
        </a>
      </div>
    </Container>
  );
};
