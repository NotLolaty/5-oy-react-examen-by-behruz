import React, { useState } from "react";
import { Hero } from "./hero/hero";
import { WeGive } from "./we-give/we-give";
import { Ad } from "./ad/ad";
import { Products } from "./our-products/products";
import { LatestBlog } from "./latest-blog-products/latest-blog";
import { Idk } from "./idk/idk";
import { ModalCard } from "./Modal-card/modal-card";
import { useSelector, useDispatch } from "react-redux";
import NotLiked from "../../../../assets/img/NotLiked.png";
import Liked from "../../../../assets/img/Liked.png";
import New from "../../../../assets/img/new.png";
import Add from "../../../../assets/img/add.png";
import Delete from "../../../../assets/img/delete.png";
import { add } from "../../../../store/reducers/product";
import {
  Button,
  Container,
  Typography,
  Stack,
  Drawer,
  Box,
} from "@mui/material";

export const Main = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:6389/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const { products } = useSelector((state) => state.product);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpen1, setIsDrawerOpen1] = useState(false);

  return (
    <Container>
      <Hero />
      <WeGive />
      <Ad />
      <Container style={{ marginTop: "50px" }}>
        <Typography
          className="cool-hover-text"
          variant="h2"
          textAlign={"center"}
        >
          Our Products
        </Typography>
        <span
          style={{
            width: "400px",
            height: "2px",
            color: "rgb(90, 90, 201)",
            display: "block",
            margin: "0 auto",
            background: "rgb(90, 90, 201)",
            marginBottom: "20px",
          }}
        ></span>
        <Typography
          className="cool-hover-text"
          variant="subtitle1"
          textAlign={"center"}
          marginBottom={5}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          nec ex eget lectus tincidunt maximus
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginBottom: "25px",
          }}
        >
          <Button
            className="products-categories-text"
            sx={{ color: "black", transition: "all .4s ease" }}
            variant="text"
          >
            All
          </Button>
          <Button
            className="products-categories-text"
            sx={{ color: "black", transition: "all .4s ease" }}
            variant="text"
          >
            New products
          </Button>
          <Button
            className="products-categories-text"
            sx={{ color: "black", transition: "all .4s ease" }}
            variant="text"
          >
            Onsale
          </Button>
          <Button
            className="products-categories-text"
            sx={{ color: "black", transition: "all .4s ease" }}
            variant="text"
          >
            Upcoming products
          </Button>
          <Stack display={"flex"}>
            <Button>
              <img
                onClick={() => {
                  setIsDrawerOpen(true);
                  console.log(products);
                }}
                src={Add}
                alt="img"
              />
            </Button>

            <Button>
              <img
                onClick={() => {
                  setIsDrawerOpen1(true);
                  console.log(products);
                }}
                src={NotLiked}
                alt="img"
              />
            </Button>
          </Stack>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "15px",
          }}
        >
          {data.map((item) => (
            <Products key={item.id} {...item} />
          ))}

          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
              <Typography>Cart</Typography>
            </Box>
            <Stack>
              {products?.map((el) => (
                <ModalCard key={el.id} {...el} />
              ))}
            </Stack>
          </Drawer>
          <Drawer
            anchor="left"
            open={isDrawerOpen1}
            onClose={() => setIsDrawerOpen1(false)}
          >
            <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
              <Typography>Wishlist</Typography>
            </Box>
            <Stack>
              {products?.map((el) => (
                <ModalCard key={el.id} {...el} />
              ))}
            </Stack>
          </Drawer>
        </div>
      </Container>
      <Ad />
      <LatestBlog />
      <Idk />
    </Container>
  );
};
