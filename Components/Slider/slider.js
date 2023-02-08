import React, { Component } from "react";
import Image from "next/image";
import { Box, Text, Link } from "@chakra-ui/react";
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
          breakpoint: 1024,
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
              overflow="hidden"
            />
            <Box pos="absolute" zIndex="30" top="25%" fontSize={20}>
              <h1 className="banner-text">the school logo</h1>
              <h2 className="banner-text">Keyonaville school</h2>
              <h3 className="banner-text">
                kindergarten,nursery, primary & college
              </h3>
              <Link href="/" passHref>
                EXPLORE
              </Link>
              <Link href="/" passHref>
                Make Call
              </Link>
            </Box>
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
              overflow="hidden"
            />
            <Text pos="absolute" zIndex="25" top="40%" fontSize={40}>
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
              overflow="hidden"
            />
            <Text pos="absolute" zIndex="20" top="40%" fontSize={40}>
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
              overflow="hidden"
            />
            <Text pos="absolute" zIndex="15" top="40%" fontSize={40}>
              banner4
            </Text>
          </Box>
        </Slider>
      </>
    );
  }
}
