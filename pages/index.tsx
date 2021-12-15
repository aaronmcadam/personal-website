import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Loves } from "@/components/loves";
import { Nav } from "@/components/nav";
import { Posts } from "@/components/posts";
import { FletcherQuote } from "@/components/quotes/fletcher-quote";
import { PicassoQuote } from "@/components/quotes/picasso-quote";
import { Avatar, Box, Heading, Stack, Text } from "@chakra-ui/react";
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
        <Nav />
        <Hero />
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
