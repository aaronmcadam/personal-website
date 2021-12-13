import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  Link as ChakraLink,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { Logo } from "./logo";

export function Nav() {
  return (
    <Flex
      justify="space-between"
      maxW="7xl"
      mx="auto"
      px={{ base: 4, sm: 6, lg: 8 }}
      py={10}
    >
      <Logo />
      {/* <HStack spacing={6} fontSize="2xl">
        <Link href="/blog" passHref={true}>
          <ChakraLink fontFamily="Cartridge">Blog</ChakraLink>
        </Link>
        <Link href="/about" passHref={true}>
          <ChakraLink fontFamily="Cartridge">About</ChakraLink>
        </Link>
      </HStack> */}
    </Flex>
  );
}
