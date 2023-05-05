import React, { useState, useRef, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import NavLink from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { social } from "../Navbar/Navdata";
import outline from "../../public/images/outline.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  // active pages router
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <>
      <nav>
        <Box className="nav-center">
          {/* the logo section */}
          <Box className="nav-header">
            <Image src={outline} className="brand-logo" alt="brand Logo" />
            <button
              className="nav-toggle"
              onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </Box>
          {/* the navbar section */}
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              <li>
                <Link
                  href="/"
                  className={currentRoute == "/" ? "active" : ""}
                  passhref="true"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={currentRoute == "/about" ? "active" : ""}
                  passhref="true"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className={currentRoute == "/gallery" ? "active" : ""}
                  passhref="true"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={currentRoute == "/contact" ? "active" : ""}
                  passhref="true"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className={currentRoute == "/faq" ? "active" : ""}
                  passhref="true"
                >
                  Faq
                </Link>
              </li>
            </ul>
          </div>
          {/* the social media section */}
          <Box>
            <ul className="social-icons">
              {social.map((socialIcon) => {
                const { id, url, icon } = socialIcon;
                return (
                  <li key={id}>
                    <Link href={url} passhref="true" target="_blank">
                      {icon}
                    </Link>
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
