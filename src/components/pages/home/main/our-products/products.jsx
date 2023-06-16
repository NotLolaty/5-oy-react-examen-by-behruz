import {
  Button,
  Container,
  Typography,
  Drawer,
  Box,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../../../../store/reducers/product";
import NotLiked from "../../../../../assets/img/NotLiked.png";
import Liked from "../../../../../assets/img/Liked.png";
import New from "../../../../../assets/img/new.png";
import Add from "../../../../../assets/img/add.png";
import Delete from "../../../../../assets/img/delete.png";
import { ModalCard } from "../Modal-card/modal-card";
import { useSelector } from "react-redux";
import "./products.css";

export const Products = ({ image, price, title, id }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(!true);
  const [isDrawerOpen1, setIsDrawerOpen1] = useState(false);
  const handleClickScroll = () => {
    const element = document.getElementById("productss");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch(add({ image, price, title, id }));
  };
  const category = ["all", "new products", "onsale", "upcoming products"];
  return (
    <Container key={id} style={{ marginBottom: "10px" }}>
      <div className="map-container cool-hover">
        <a
          style={{ position: "relative", cursor: "pointer" }}
          href={handleClickScroll}
        >
          <img
            style={{
              borderRadius: "6px",
              width: "300px",
              height: "300px",
              objectFit: "contain",
            }}
            src={image}
            alt="img"
          />
          <Typography color={"black"}>{title}</Typography>
          <Typography color={"black"}>{price} $</Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              padding: "5px",
            }}
          >
            <Button onClick={addProduct}>
              <img onClick={() => setIsDrawerOpen(true)} src={Add} alt="img" />
            </Button>
            <Button onClick={addProduct}>
              <img
                onClick={() => setIsDrawerOpen1(true)}
                src={NotLiked}
                alt="img"
              />
            </Button>
          </div>
        </a>
      </div>
    </Container>
  );
};
