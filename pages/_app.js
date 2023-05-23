// import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const linkTags = [
  {
    rel: "icon",
    href: "/favblack.png",
    sizes: "76x76",
  },
];
// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// };
// const theme = extendTheme({ colors });
const theme = extendTheme({
  colors: {
    primary: {
      1: "#092038",
      2: "#1a202c",
    },
    secondary: {
      1: "red",
      2: "#1a202c",
    },
    accent: {
      1: "#f7fafc",
      2: "#1a202c",
    },
    other: {
      1: "#f7fafc",
      2: "#1a202c",
    },
  },
});

function MyApp({ Component, pageProps }) {
  // <ChakraProvider theme={theme}>
  return (
    <>
      <DefaultSeo additionalLinkTags={linkTags} {...SEO} />
      <Component {...pageProps} />; //
      {/* // </ChakraProvider>; */}
    </>
  );
}

export default MyApp;
