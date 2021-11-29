import {
  Box,
  Heading,
  Text,
  HStack,
  Link,
  Avatar,
  Stack,
} from "@chakra-ui/react";
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
      <Box as="main" maxW="7xl" mx="auto" px={4} mt={16}>
        <Heading
          fontSize={{ base: "5xl", sm: "6xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          color="sky.800"
        >
          Aaron McAdam
        </Heading>
        <Stack
          direction={{ base: "column", lg: "row" }}
          divider={
            <Text display={{ base: "none", lg: "inline" }} px={2}>
              &middot;
            </Text>
          }
          color="gray.500"
          fontSize={{ base: "2xl", sm: "3xl" }}
          fontWeight="medium"
          letterSpacing="tight"
          mt={4}
        >
          <Text>💻 Product Engineer</Text>
          <Text>🎨 Design Technologist</Text>
          <Text>✍ Typography Nerd</Text>
        </Stack>
        <Box mt={16} maxW="xl" fontSize={{ base: "lg", sm: "2xl" }}>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            Crafting delightful products
          </Heading>
          <Text mt={6}>
            👋 I’m Aaron, and I’m passionate about building great products. I
            care as much about typography as I do about TypeScript—my skills
            stretch across design and engineering.
          </Text>
          <Text mt={2}>
            I’m always trying to find ways to make more of an impact by
            constantly learning new things. I’m also a collaborator member at
            Chakra UI.
          </Text>
        </Box>
      </Box>
      <Avatar
        src="/me.jpg"
        size="3xl"
        showBorder={true}
        borderWidth="10px"
        borderColor="sky.600"
        pos="fixed"
        bottom="-80px"
        right="-80px"
      />
    </Box>
  );
};

export default Home;
