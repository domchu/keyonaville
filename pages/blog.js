import Head from "next/head";
import Image from "next/image";
import Blog from "../Components/Blog/Blog";
import Footer from "../Components/Footer/Footer";
import Topmenu from "../Components/Topmenu/Topmenu";
import Navbar from "./../Components/Navbar/Navbar";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

export default function blog() {
  return (
    <>
      <DefaultSeo
        title="About Us | keyonaville school"
        description=""
        {...SEO}
      />
      <Topmenu />
      <Navbar />
      <Blog />
      <Footer />
    </>
  );
}
