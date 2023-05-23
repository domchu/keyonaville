import { Box } from "@chakra-ui/react";
import Navbar from "./../Components/Navbar/Navbar";
import Faq from "../Components/Faq/Faq";
import Footer from "./../Components/Footer/Footer";
import Topmenu from "../Components/Topmenu/Topmenu";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function faq() {
  return (
    <>
      <DefaultSeo
        title="Faq | keyonaville schools"
        description="Frequently asked questions about keyonaville school from our beloved parents"
        {...SEO}
      />
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
    </>
  );
}
