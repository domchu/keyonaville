import Head from "next/head";
import Contact from "../Components/Contact/Contact";
import Footer from "./../Components/Footer/Footer";
import Navbar from "./../Components/Navbar/Navbar";
import OpenDays from "../Components/OpenDays";
import Topmenu from "../Components/Topmenu/Topmenu";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function contact() {
  return (
    <>
      <DefaultSeo
        title="Contact Us | keyonaville school"
        description=""
        {...SEO}
      />
      <Topmenu />
      <Navbar />
      <Contact />
      <OpenDays />
      <Footer />
    </>
  );
}
