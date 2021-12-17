import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Loves } from "@/components/loves";
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
      <Box as="main">
        <Box maxW="8xl" mx="auto" pos="relative">
          <Box pos="absolute" zIndex="hide" opacity={0.7}>
            <Image
              aria-hidden="true"
              alt="pattern background"
              src="/assets/images/bg/confetti/1.svg"
            />
            <Image
              aria-hidden="true"
              alt="pattern background"
              src="/assets/images/bg/confetti/2.svg"
            />
            <Image
              aria-hidden="true"
              alt="pattern background"
              src="/assets/images/bg/confetti/3.svg"
            />
            <Image
              aria-hidden="true"
              alt="pattern background"
              src="/assets/images/bg/confetti/4.svg"
            />
            <Image
              aria-hidden="true"
              alt="pattern background"
              src="/assets/images/bg/confetti/3.svg"
              display={{ sm: "none" }}
            />
            <Image
              aria-hidden="true"
              alt="pattern background"
              src="/assets/images/bg/confetti/2.svg"
              display={{ sm: "none" }}
            />
            <Image
              aria-hidden="true"
              alt="pattern background"
              src="/assets/images/bg/confetti/1.svg"
              display={{ sm: "none" }}
            />
          </Box>
        </Box>
        <Nav />
        <Hero />
        <About />
        <Loves />
        {/*
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
