import React from "react";
import BlogData from "../../../../../../server/blog.json";
import { Container, Typography } from "@mui/material";

export const LatestBlog = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("ad");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container style={{ marginTop: "50px" }}>
      <Typography
        className="cool-hover-text"
        variant="h2"
        textAlign={"center"}
        marginBottom={"5px"}
      >
        Our Latest Blog
      </Typography>
      <span
        style={{
          width: "500px",
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec
        ex eget lectus tincidunt maximus
      </Typography>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr ",
          gap: "70px",
        }}
      >
        {BlogData &&
          BlogData.map((data) => {
            return (
              <div key={data.id} className="map-container cool-hover lb-container">
                <a href={handleClickScroll}>
                  <img
                    style={{ borderRadius: "6px" }}
                    src={data.img}
                    alt="img"
                  />
                  <Typography color={"#5A5AC9"}>{data.title}</Typography>
                  <Typography color={"black"}>{data.description}</Typography>
                  <Typography>{data.author}</Typography>
                </a>
              </div>
            );
          })}
      </div>
    </Container>
  );
};
