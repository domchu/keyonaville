import React, { Component } from "react";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import banner from "../../public/images/nature20.jpg";
// import banner2 from "../../public/images/nature17.jpg";

export default class Responsive extends Component {
  render() {
    var settings = {
      initialSlide: 0,
      autoplay: true,
      // speed: 1000,
      // autoplaySpeed: 1000,
      cssEase: "linear",
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Slider {...settings}>
          <Box>
            <Box
              bgImage="url('./images/nature20.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              maxW="100%"
              h={600}
              pos="relative"
            />
            <Text pos="absolute" zIndex="30" top="40%" left="" fontSize={40}>
              banner1
            </Text>
            <Text pos="absolute" zIndex="30" top="50%" left="" fontSize={40}>
              banner12
            </Text>
            {/* <h1>the school logo</h1>
            <h3>Keyonaville school</h3>
            <h3>kindergarten,nursery, primary & college</h3> */}
          </Box>
          <Box>
            <Box
              bgImage="url('./images/nature17.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              maxW="100%"
              h={600}
              pos="relative"
            />
            <Text
              pos="absolute"
              zIndex="25"
              top="40%"
              // left="16%"

              fontSize={40}
            >
              banner2
            </Text>
          </Box>
          <Box>
            <Box
              bgImage="url('./images/nature16.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              maxW="100%"
              h={600}
              pos="relative"
            />
            <Text
              pos="absolute"
              zIndex="20"
              top="40%"
              // left="16%"

              fontSize={40}
            >
              banner3
            </Text>
          </Box>
          <Box>
            <Box
              bgImage="url('./images/nature19.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              maxW="100%"
              h={600}
              pos="relative"
            />
            <Text
              pos="absolute"
              zIndex="15"
              top="40%"
              // left="16%"

              fontSize={40}
            >
              banner4
            </Text>
          </Box>
        </Slider>
      </>
    );
  }
}
