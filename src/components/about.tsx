import { Box, Heading, SimpleGrid, Stack, Text, Link } from "@chakra-ui/react";

export function About() {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} mt={24}>
      <SimpleGrid columns={12} spacing={12}>
        <Box gridColumn="span 7">
          <Heading>😃 What I do</Heading>
          <Text fontSize="2xl" mt={4}>
            I’m a Senior Product Engineer at{" "}
            <Link
              href="https://www.craft.do"
              target="_blank"
              rel="noopener noreferrer"
            >
              Craft
            </Link>
            , helping our customers capture incredible notes and write beautiful
            documents. I also work on documentation and Developer Relations for{" "}
            <Link
              href="https://chakra-ui.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chakra UI
            </Link>
            , the popular React component library. I’m happiest when working on
            Design Systems and scalable architectures.
          </Text>
        </Box>
        <Box gridColumn="span 5" fontSize="2xl">
          <Heading>👀 Where to find me</Heading>
          <SimpleGrid columns={2} mt={4}>
            <Text>Designing on...</Text>
            <Link
              href="https://www.figma.com/@aaronmcadam"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </Link>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <Text>Hacking on...</Text>
            <Link
              href="https://github.com/aaronmcadam"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <Text>Tweeting on...</Text>
            <Link
              href="https://twitter.com/aaronmcadam"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
          </SimpleGrid>
          <SimpleGrid columns={2}>
            <Text>Chatting on...</Text>
            <Link
              href="https://discord.gg/chakra-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
