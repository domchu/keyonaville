import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./Navdata";

// import logo from "./logo.svg";
import Gallery from "./../pages/gallery";

const Navbar = () => {
  return (
    <>
      <nav>
        <Box className="nav-center">
          <Box className="nav-header">
            {/* <Image src={logo} alt="logo" /> */}
            <h1>Logo</h1>
            <button className="nav-toggle">
              <FaBars />
            </button>
          </Box>
          <Box className="links-container show-container">
            <li className="links">
              <a href="">Home</a>
            </li>
            <li className="links">
              <a href="">About-us</a>
            </li>
            <li className="links">
              <a href="">Facilities</a>
            </li>
            <li className="links">
              <a href="">Gallery</a>
            </li>
            <li className="links">
              <a href="">Contact</a>
            </li>
            <li className="links">
              <a href="">Faq</a>
            </li>
          </Box>
          <ul className="social-icons"></ul>
        </Box>
      </nav>
    </>
  );
};

export default Navbar;
