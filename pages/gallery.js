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
        description="Explore more from our image gallery for your better experience"
        {...SEO}
      />
      <Topmenu />
      <Navbar />
      <Gallery />
      <Footer />
    </>
  );
}
