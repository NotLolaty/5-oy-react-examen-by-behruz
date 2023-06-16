import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import FreeShipping from "../../../../../assets/icon/FreeShipping";
import FreeReturns from "../../../../../assets/icon/FreeReturns";
import PaymentSecure from "../../../../../assets/icon/PaymentSecure";
import Support from "../../../../../assets/icon/Support";
import "./we-give.css";

export const WeGive = () => {
  return (
    <Container style={{ marginTop: "100px" }}>
      <Stack
        display={"grid"}
        gridTemplateColumns={"1fr 1fr 1fr 1fr"}
        justifyContent={"space-between"}
        justifyItems={"center"}
        alignItems={"center"}
        borderRadius={"3px"}
        backgroundColor={"#5A5AC9"}
        padding={"20px"}
        gap={"10px"}
      >
        <div className="Text-box cool-hover1">
          <div>
            <Typography variant="h5" className="Text-box-title">
              Free Shipping
            </Typography>
            <Typography variant="subtitle2" className="Text-box-text">
              On all orders over 75.00$
            </Typography>
            <FreeShipping />
          </div>
        </div>
        <div className="Text-box cool-hover1">
          <div>
            <Typography variant="h5" className="Text-box-title">
              Free Returns
            </Typography>
            <Typography variant="subtitle2" className="Text-box-text">
              Returns are free within 9 days
            </Typography>
            <FreeReturns />
          </div>
        </div>
        <div className="Text-box cool-hover1">
          <div>
            <Typography variant="h5" className="Text-box-title">
              100% Pay Secure
            </Typography>
            <Typography variant="subtitle2" className="Text-box-text">
              Your payment are safe with us.
            </Typography>
            <PaymentSecure />
          </div>
        </div>
        <div className="Text-box cool-hover1">
          <div>
            <Typography variant="h5" className="Text-box-title">
              Support 24/7
            </Typography>
            <Typography variant="subtitle2" className="Text-box-text">
              Contact us 24 hours a day
            </Typography>
            <Support />
          </div>
        </div>
      </Stack>
    </Container>
  );
};
