import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import boysuniform from "../../public/images/boysuniform.jpg";
import girlsuniform from "../../public/images/girlsuniform.jpg";

const About = () => {
  
  return (
    <>
      <Box className="about-us">
        <Box className="about-us-text">
          <Box className="about-1">
            <h1>ABOUT US</h1>
            <div className="underline"></div>
            <Text fontSize="1.3rem" color="black" className="about__quote">
              The only thing standing between you and your goal is the untrue
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
      <Flex className="about-history">
        <Box textAlign="left" className="left">
          <h2>
            HISTORY OF THE SCHOOL <br /> (KEYONAVILLE SCHOOL)
          </h2>
          <p>
            Keyonaville Nursery, Primary and secondary school was founded by Mrs
            Vivian Mike-Igini in Afromedia Community in the year 2021.
            <br />
            Her mission is to provide the children in low civilized area with
            high quality learning in a conducive environment so that they can
            compete favourably and independently with their peers.
            <br />
            She aims at giving education that focuses on engaging on an active
            learni ng also in a safe and warm environment.
          </p>
        </Box>
        <Box>
          <Flex className="sm-screen">
            <Box className="contact-image-container">
              <Image
                src={boysuniform}
                alt="nature"
                height="500px"
                width="400px"
                className="contact-img"
              />
              <Box className="contact__img__text">
                <Box className="wear">BOYS UNIFORM</Box>
              </Box>
            </Box>
            <Box className="contact-image-container top">
              <Image
                height="500px"
                width="400px"
                src={girlsuniform}
                alt="nature"
                className="contact-img"
              />
              <Box className="contact__img__text">
                <Box className="wear">GIRLS UNIFORM</Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Flex className="about-history">
        <Flex className="sm-screen">
          <Box className="mission-statement">
            <h3>Our Mission</h3>
            <p>
              Keyonavillie school is dedicated to providing a safe and warm
              environment that stimulates creativity and problem solving skills
              that unleash the genius in the child.
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
              are raised to become globally relevant and are life long learners.
            </p>
            <ul>
              <li className="contact__btn">
                <Link
                  href="#facilities"
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
            WELCOME TO <br /> KEYONAVILLE SCHOOL.
          </h2>
          <p>
            A leading educational institution dedicated to providing exceptional
            care and education for your child.Our play-based curriculum develops
            creativity, critical thinking and collaboration in a safe and
            nurturing environment led by experienced and caring staff. We are
            committed to creating a warm and inclusive space for your child to
            grow and reach their full potential. At keyonaville, we believe that
            every child is a treasure and we are dedicated to unlocking and
            nurturing their unique gifts and talents.
            <br />
            Join us on this exciting journey of discovery and learning at
            keyonaville school.
          </p>
        </Box>
      </Flex>

      {/*SCHOOL CATEGORIES  */}
      <Box>
        <Box className="title">
          <h2>
            <span>/</span> SCHOOL CATEGORIES
          </h2>
        </Box>
        <Box className="grid-container">
          <Box className="why-text">
            <h4>Play Group</h4>
            <p>
              Our play school program offers a fun and an engaging learning
              experience that develops creativity and critical thinking in a
              safe, nurturing environment with caring staff.
            </p>
          </Box>
          <Box className="why-text">
            <h4>Nursery School</h4>
            <p>
              Individualized care and learning for your child. We believe play
              is the best way to learn and explore. Our creative resources and
              spaces support each child's learning journey with art, music,
              reading, toys and many more.
            </p>
          </Box>
          <Box className="why-text">
            <h4>Primary School</h4>
            <p>
              Empower your child with personalized education that builds
              confidence. Our innovative curriculum fosters problem-solving and
              creativity through hands-on-learning. Join us for a well-rounded
              and fulfilling education.
            </p>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
