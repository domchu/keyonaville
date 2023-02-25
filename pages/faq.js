import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./../Components/Navbar/Navbar";
import Faq from "../Components/Faq/Faq";
import Footer from "./../Components/Footer/Footer";
import Topmenu from "../Components/Topmenu/Topmenu";

export default function faq() {
  return (
    <div>
      <Head>
        <title>Keyonavillie School | Faq</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favblack.png" size="64X64" type="image/png" />
      </Head>
      <Topmenu />
      <Navbar />
      <Box className="faq-container">
        <div className="title">
          <h2>
            <span>/</span>Frequently Asked Questions
          </h2>
        </div>
        <h4>Got a question? I have answers.</h4>
      </Box>
      <Faq />
      <Footer />
    </div>
  );
}
