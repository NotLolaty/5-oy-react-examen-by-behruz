import React from "react";
import { Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAD from "../../../../../assets/img/first-ad.jpg";
import SAD from "../../../../../assets/img/second-ad.jpg";
import TAD from "../../../../../assets/img/third-ad.jpg";

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Slider style={{ marginLeft: "40px" }} {...settings}>
      <div className="card">
        <div className="card-top">
          <img width={"1050px"} height={"700px"} src={FAD} alt="car" />
        </div>
      </div>
      <div className="card">
        <div className="card-top">
          <img width={"1050px"} height={"700px"} src={SAD} alt="car" />
        </div>
      </div>
      <div className="card">
        <div className="card-top">
          <img width={"1050px"} height={"700px"} src={TAD} alt="car" />
        </div>
      </div>
    </Slider>
  );
};
