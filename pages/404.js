import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Grid, Box } from "@chakra-ui/react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Topmenu from "../Components/Topmenu/Topmenu";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <DefaultSeo
        title="About Us | keyonaville school"
        description=""
        {...SEO}
      />
      <Topmenu />
      <Navbar />
      <Box>
        <Grid
          placeItems="center"
          h={200}
          textAlign="center"
          fontSize="2rem"
          mt={30}
          mb={30}
        >
          <h2>Oooops...</h2>
          <h3>404 | That page could not be found.</h3>
          <p>
            Go back to the
            <Link href="/">Home page</Link>
          </p>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Error;
