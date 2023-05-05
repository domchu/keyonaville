// import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";

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
  return <Component {...pageProps} />; //{" "}
  // </ChakraProvider>;
}

export default MyApp;
