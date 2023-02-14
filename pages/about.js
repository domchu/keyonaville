import Head from "next/head";
import Image from "next/image";
import About from "../Components/About/About";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Topmenu from "./../Components/Topmenu/Topmenu";

export default function about() {
  return (
    <div>
      <Head>
        <title>Keyonavillie School | About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topmenu />
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
