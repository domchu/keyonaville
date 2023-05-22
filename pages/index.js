import Head from "next/head";
import CoreValue from "../Components/CoreValue";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";
import Testimonial from "../Components/Testimonial/Testimonial";
import WhyKeyona from "../Components/WhyKeyona";
import Facilities from "../Components/Facilities";
import Topmenu from "../Components/Topmenu/Topmenu";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
export default function Home() {
  return (
    <>
      <DefaultSeo title="Home | keyonaville school" description="" {...SEO} />
      <Topmenu />
      <Navbar />
      <Slider />
      <WhyKeyona />
      <CoreValue />
      <Testimonial />
      <Facilities />
      <Footer />
    </>
  );
}
