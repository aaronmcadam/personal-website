import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Box, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Aaron McAdam · Design Technologist</title>
        <meta name="description" content="Crafting delightful products" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/assets/fonts/Cartridge-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/Cartridge-Regular.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/assets/fonts/Cartridge-Regular.woff2"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Box as="main" pos="relative">
        <Box h="full">
          <Image
            aria-hidden="true"
            alt="pattern background"
            src="/assets/images/bg.svg"
            pos="absolute"
            top={{ base: "32px", sm: "64px", lg: 0 }}
            zIndex="hide"
          />
          <Nav />
          <Hero />
        </Box>
        <About />
        {/* <Loves />
        <FletcherQuote />
        <Posts />
        <PicassoQuote /> */}
      </Box>
      <Box as="footer">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
