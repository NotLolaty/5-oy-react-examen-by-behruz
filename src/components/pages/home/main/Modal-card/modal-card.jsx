import { Stack, Typography, Button } from "@mui/material";
import React from "react";

export const ModalCard = ({ image, title, userPrice, count, id }) => {
  return (
    <Stack alignItems={"center"}>
      <div style={{ width: "130px" }}>
        <img
          style={{ width: "100%", objectFit: "contain" }}
          src={image}
          alt="cool img"
        />
      </div>
      <div style={{ alignItems: "center" }}>
        <Typography>{title}</Typography>
        <Typography>{userPrice} $</Typography>
        <Stack direction={"row"} alignItems={"center"} margin={"0 auto"}>
          <Button variant="contained">+</Button>
          <Typography variant="h3">{count}</Typography>
          <Button variant="contained">-</Button>
        </Stack>
      </div>
    </Stack>
  );
};
