import Head from "next/head";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Topmenu from "./../Components/Topmenu/Topmenu";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function about() {
  return (
    <>
      <DefaultSeo
        title="About Us | keyonaville school"
        description=""
        {...SEO}
      />
      <Topmenu />
      <Navbar />
      <About />
      <Footer />
    </>
  );
}
