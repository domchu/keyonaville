// import React from "react";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nature19 from "../../public/images/nature19.jpg";
import nature20 from "../../public/images/nature20.jpg";
import nature17 from "../../public/images/nature17.jpg";
import Card from "../../Components/Testimonial/Card";

const Testimonial = () => {
  return (
    <>
      <Box>
        <h2>Testimonials</h2>

        <Slider>
          <Card img={nature19} alt="Testimonial" />
          <Card img="nature20" alt="Testimonial" />
          <Card img="nature17" alt="Testimonial" />
        </Slider>
      </Box>
    </>
  );
};

export default Testimonial;
