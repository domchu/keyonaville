import React from "react";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Logowhite from "../../public/images/logowhite.jpeg";
import Logoblack from "../../public/images/logoblack.jpeg";
import Logoyellow from "../../public/images/logoyellow.jpeg";
const Logo = () => {
  return (
    <>
      <Flex>
        <Image
          src={Logoyellow}
          alt="logo"
          width="100px"
          height="100px"
          className="logo-img"
        />
        <Image
          src={Logoblack}
          alt="logo"
          width="100px"
          height="100px"
          className="logo-img"
        />
        <Image
          src={Logowhite}
          alt="logo"
          width="100px"
          height="100px"
          className="logo-img"
        />
      </Flex>
    </>
  );
};
export default Logo;
