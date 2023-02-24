import Head from 'next/head'
import CoreValue from "../Components/CoreValue";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";
import Testimonial from "../Components/Testimonial/testimonial";
import WhyKeyona from "../Components/WhyKeyona";
import Facilities from "../Components/Facilities";
import Topmenu from "../Components/Topmenu/Topmenu";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Keyonaville School | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favblack.png" size="48x48" type="image/png" />
        <link rel="icon" href="/favblack.png" size="48x48" type="image/png" />
      </Head>
      <Topmenu />
      <Navbar />
      <Slider />
      <WhyKeyona />
      <CoreValue />
      <Testimonial />
      <Facilities />
      <Footer />
    </div>
  );
}
