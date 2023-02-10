// import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import Image from "next/image";
import nature19 from "../../public/images/nature19.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../Components/Testimonial/Card";

const Testimonial = () => {
  return (
    <>
      <Box
        className="testimonial"
        style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
      >
        <Box style={{ width: "50%" }}>
          <h2>Testimonials</h2>

          <Slider>
            <Card img={nature19} alt="" />
            <Card img="nature20" alt="" />
            <Card img="nature17" alt="" />
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Testimonial;
