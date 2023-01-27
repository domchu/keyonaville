import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./Navdata";

// import logo from "./logo.svg";
import Gallery from "./../pages/gallery";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <nav>
        <Box className="nav-center">
          <Box className="nav-header">
            {/* <Image src={logo} alt="logo" /> */}
            <h1>Logo</h1>
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </Box>
          {/* {showLinks && ( */}
          <div
            className={`${
              showLinks ? "links-container show-container" : "links-container"
            }`}
          >
            <ul className="links">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text} </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* )} */}
          <Box>
            <ul className="social-icons">
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li key={id}>
                    <a href={url}>{icon} </a>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Box>
      </nav>
    </>
  );
};

export default Navbar;
