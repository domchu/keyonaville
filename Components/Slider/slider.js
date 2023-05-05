import React, { Component } from "react";
import { Box, Link } from "@chakra-ui/react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../public/images/outline.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      initialSlide: 0,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
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
          <Box className="slide">
            <Box
              bgImage="url('./images/banner1.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              objectFit="cover"
              w="100%"
              h="100%"
              overflow="hidden"
              loading="lazy"
            />
            <Box className="banner__container">
              <Box className="logo-container">
                <Image
                  src={logo}
                  className="logo banner-text"
                  alt="brand Logo"
                />
              </Box>
              <h2 className="banner-text">Keyonaville school</h2>
              <h3 className="banner-text special">
                Kindergarten, Nursery, Primary & College
              </h3>
              <Box>
                <Link href="/gallery" className="banner-btn" passhref="true">
                  EXPLORE
                </Link>
                <Link
                  href="tel:09131971920"
                  className="banner-btn"
                  passhref="true"
                >
                  Contact Us
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="slide">
            <Box
              bgImage="url('./images/computerlab.jpeg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              maxW="100%"
              h="100%"
              pos="relative"
              overflow="hidden"
              loading="lazy"
            />
            <Box className="banner__container">
              <h2 className="banner-text special">
                A Partnership In Discovery.
              </h2>
              <Box>
                <Link
                  href="https://facebook.com/keyonavilleschool"
                  className="banner-btn"
                  passhref="true"
                >
                  Facebook
                </Link>
                <Link
                  href="https://www.instagram.com/keyonaville/"
                  className="banner-btn"
                  passhref="true"
                >
                  Instagram
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="slide">
            <Box
              bgImage="url('./images/banner3.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              maxW="100%"
              h="100%"
              pos="relative"
              overflow="hidden"
              loading="lazy"
            />
            <Box className="banner__container">
              <h2 className="banner-text special">
                A Building With Four Walls And Tommorow Inside.
              </h2>
              <Box>
                <Link href="/contact" className="banner-btn" passhref="true">
                  Contact
                </Link>
                <Link
                  href="milito=keyonavilleschool@gmail.com"
                  className="banner-btn"
                  passhref="true"
                >
                  Email
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="slide">
            <Box
              bgImage="url('./images/banner4.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              maxW="100%"
              h="100%"
              pos="relative"
              overflow="hidden"
              loading="lazy"
            />
            <Box className="banner__container">
              <h2 className="banner-text special">
                A Community With High Expectation And High Academic Success.
              </h2>
              <Box>
                <Link href="/gallery" className="banner-btn" passhref="true">
                  Gallery
                </Link>
                <Link
                  href="/tel:09131971920"
                  className="banner-btn"
                  passhref="true"
                >
                  Contact Us
                </Link>
              </Box>
            </Box>
          </Box>
        </Slider>
      </>
    );
  }
}
