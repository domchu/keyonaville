import React, { Component } from "react";
import { Box, Link } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
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
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 500,
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
              bgImage="url('./images/banner1.jpeg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              objectFit="cover"
              maxW="100%"
              h={620}
              pos="relative"
              overflow="hidden"
            />
            <Box className="banner__container">
              <h1 className="banner-text"> logo</h1>
              <h2 className="banner-text">Keyonaville school</h2>
              <h3 className="banner-text special">
                Nursery, Primary & College
              </h3>
              <Box>
                <Link href="/gallery" className="banner-btn" passhref="true">
                  <a> EXPLORE</a>
                </Link>
                <Link href="/" className="banner-btn" passhref="true">
                  <a> Make Call</a>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              bgImage="url('./images/computerlab.jpeg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              maxW="100%"
              h={620}
              pos="relative"
              overflow="hidden"
            />
            <Box className="banner__container">
              <h2 className="banner-text special">Keyonaville school</h2>
              <Box>
                <Link href="/gallery" className="banner-btn" passhref="true">
                  <a> EXPLORE</a>
                </Link>
                <Link href="/" className="banner-btn" passhref="true">
                  <a> Make Call</a>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              bgImage="url('./images/playground.jpeg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              maxW="100%"
              h={620}
              pos="relative"
              overflow="hidden"
            />
            <Box className="banner__container">
              <h2 className="banner-text special">Keyonaville school</h2>
              <Box>
                <Link href="/gallery" className="banner-btn" passhref="true">
                  <a> EXPLORE</a>
                </Link>
                <Link href="/" className="banner-btn" passhref="true">
                  <a> Make Call</a>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              bgImage="url('./images/classroom.jpeg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              maxW="100%"
              h={620}
              pos="relative"
              overflow="hidden"
            />
            <Box className="banner__container">
              <h2 className="banner-text special">Keyonaville school</h2>
              <Box>
                <Link href="/gallery" className="banner-btn" passhref="true">
                  <a> EXPLORE</a>
                </Link>
                <Link href="/" className="banner-btn" passhref="true">
                  <a> Make Call</a>
                </Link>
              </Box>
            </Box>
          </Box>
        </Slider>
      </>
    );
  }
}
