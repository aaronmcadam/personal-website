import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import * as React from "react";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Aaron McAdam</title>
        <meta name="description" content="Crafting delightful products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" pt={{ base: 6, sm: 10 }}>
        Aaron McAdam
      </Box>
    </Box>
  );
};

export default Home;
