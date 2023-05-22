import Head from "next/head";
import Image from "next/image";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Gallery from "../Components/Gallery/Gallery";
import Topmenu from "./../Components/Topmenu/Topmenu";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function gallery() {
  return (
    <>
      <DefaultSeo
        title="Gallery | keyonaville school"
        description=""
        {...SEO}
      />
      <Topmenu />
      <Navbar />
      <Gallery />
      <Footer />
    </>
  );
}
