import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import nature16 from "../../public/images/nature16.jpg";
import nature17 from "../../public/images/nature17.jpg";


const About = () => {
  return (
    <>
      <Box className="about-us">
        <Box className="about-us-text">
          <Box className="about-1">
            <h2>ABOUT US</h2>
            <div className="underline"></div>
            <Text fontSize="1.3rem" color="black" className="about__quote">
              The only thing standing between you and your goal is the bullshit
              story you keep telling yourself as to why you can’t achieve it.
            </Text>
          </Box>
          <Box className="about-2">
            <Flex className="contact-list">
              <li>
                <Link href="/" passhref="true">
                  HOME
                </Link>
              </li>

              <li>
                <Link href="/contact" passhref="true">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link href="tel:+6494461709" passhref="true">
                  MAKE CALL
                </Link>
              </li>
            </Flex>
          </Box>
        </Box>
      </Box>
      {/* middle text */}
      <Flex className="about-history">
        <Box textAlign="left" className="left">
          <h2>
            WE ARE THE LEADER <br /> IN INDUSTRIAL BUSINESS
          </h2>
          <p>
            Leading companies usually have several advantages, such as pricing
            power, brand recognition and a loyal customer base. It takes time to
            achieve a dominant position in an industry, and maintaining that
            leadership position is an ongoing effort. Small businesses should
            first aspire to lead their respective local markets before planning
            for worldwide industry domination.
          </p>
          <Box>
            <p>MRS. ERICK SMITH</p>
            <Text fontWeight="800">FOUNDER AND CEO</Text>
          </Box>
        </Box>
        <Box>
          <Flex className="sm-screen">
            <Box className="contact-image-container">
              <Image
                src={nature16}
                alt="nature"
                height="500px"
                width="400px"
                className="contact-img"
              />
              <Box className="contact__img__text">
                <h3>BOYS UNIFORM</h3>
                <Text fontSize="3xl">The elegant ever</Text>
              </Box>
            </Box>
            <Box className="img-container">
              <Image
                height="500px"
                width="400px"
                src={nature17}
                alt="nature"
                className="contact-img"
              />
              <div className="contact__img__text">
                <h3>GIRLS UNIFORM</h3>
                <Text fontSize="3xl">The strongest ever</Text>
              </div>
            </Box>
          </Flex>
        </Box>
      </Flex>
      {/* the last text */}
      <Flex className="about-history">
        <Flex className="sm-screen">
          <Box className="mission-statement">
            <h3>Our Mission</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              reiciendis nostrum a ducimus sequi dolor dignissimos accusamus
              repellendus expedita voluptates.
            </p>
            <ul>
              <li>
                <Link href="/gallery" className="summit__btn" passhref="true">
                  Explore More
                </Link>
              </li>
            </ul>
          </Box>
          <Box className="mission-statement">
            <h3>Our Vision</h3>
            <p>
              To be a distinguished international school where pupils/students
              are raised to globally relevant and are life long learners.
            </p>
            <ul>
              <li className="contact__btn">
                <Link
                  href="/facilities"
                  className="summit__btn"
                  passhref="true"
                >
                  See More
                </Link>
              </li>
            </ul>
          </Box>
        </Flex>
        <Box textAlign="left" className="right">
          <h2>
            WE ARE THE LEADER <br /> IN INDUSTRIAL BUSINESS
          </h2>
          <p>
            Leading companies usually have several advantages, such as pricing
            power, brand recognition and a loyal customer base. It takes time to
            achieve a dominant position in an industry, and maintaining that
            leadership position is an ongoing effort. Small businesses should
            first aspire to lead their respective local markets before planning
            for worldwide industry domination.
          </p>
          <Box>
            <p>MRS. ERICK SMITH</p>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default About;
