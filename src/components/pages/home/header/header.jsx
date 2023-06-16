import React from "react";
import { NavbarTop } from "./navbar/navbar-top";
import { NavbarBot } from "./navbar/navbar-bot";

export const Header = () => {
  return (
    <>
      <header
        style={{
          backgroundColor: "black",
        }}
      >
        <NavbarTop />
      </header>
      <NavbarBot />
    </>
  );
};
