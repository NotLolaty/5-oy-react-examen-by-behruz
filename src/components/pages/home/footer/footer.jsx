import React from "react";
import { FooterTop } from "./footer-top";
import { FooterBot } from "./footer-bot";

export const Footer = () => {
  return (
    <footer>
      <div
        style={{
          marginTop: "30px",
          padding: "50px",
          backgroundColor: "rgb(200, 200, 200)",
        }}
      >
        <FooterTop />
      </div>
      <div style={{backgroundColor:"black", padding: "15px" }}>
        <FooterBot />
      </div>
    </footer>
  );
};
