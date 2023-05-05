import React from "react";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import footerlogo from "../../public/images/footerlogo.png";
const Logo = () => {
  return (
    <>
      <Flex>
        <Image
          src={footerlogo}
          alt="logo"
          width="100px"
          className="footer-logo"
          height="auto"
          loading="lazy"
        />
      </Flex>
    </>
  );
};
export default Logo;
