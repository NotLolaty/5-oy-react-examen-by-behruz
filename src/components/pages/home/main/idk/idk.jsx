import React from "react";
import { Container, Stack } from "@mui/material";
import idk1 from "../../../../../assets/img/idk1.png";
import idk2 from "../../../../../assets/img/idk2.png";
import idk3 from "../../../../../assets/img/idk3.png";
import idk4 from "../../../../../assets/img/idk4.png";
import idk5 from "../../../../../assets/img/idk5.png";
import idk6 from "../../../../../assets/img/idk6.png";

export const Idk = () => {
  return (
    <Container style={{ marginTop: "60px" }}>
      <hr />
      <Stack direction="row" justifyContent={"space-around"} marginTop="35px">
        <img className="cool-hover2" src={idk1} alt="img" />
        <img className="cool-hover2" src={idk2} alt="img" />
        <img className="cool-hover2" src={idk3} alt="img" />
        <img className="cool-hover2" src={idk4} alt="img" />
        <img className="cool-hover2" src={idk5} alt="img" />
        <img className="cool-hover2" src={idk6} alt="img" />
      </Stack>
    </Container>
  );
};
