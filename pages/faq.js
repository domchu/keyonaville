import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./../Components/Navbar/Navbar";
import Faq from "../Components/Faq/Faq";
import Footer from "./../Components/Footer/Footer";

export default function faq() {
  return (
    <div>
      <Head>
        <title>Keyonavillie School | Faq</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Box className="faq-container">
        <h3>FAQs</h3>
        <h1>Got a question? I have answers.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          aspernatur voluptatem commodi quis. Dolorem nulla officiis quae ullam?
          Mollitia cumque odio, laborum in molestias itaque sed deserunt illum
          accusantium blanditiis dolore adipisci perferendis atque quia eum
          reiciendis hic quidem perspiciatis.
        </p>
      </Box>
      <Faq />
      <Footer />
    </div>
  );
}
