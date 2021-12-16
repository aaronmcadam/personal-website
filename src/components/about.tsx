import { Box, Heading, SimpleGrid, Stack, Text, Link } from "@chakra-ui/react";

export function About() {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: 4, sm: 6, lg: 8, xl: 20 }}
      mt={{ base: 12, sm: 24, xl: 48, "2xl": 64 }}
    >
      <Stack spacing={12} maxW="5xl">
        <Box gridColumn="span 7">
          <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}>
            😃 What I do
          </Heading>
          <Text
            fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
            mt={4}
          >
            I’m a Senior Product Engineer at{" "}
            <Link
              href="https://www.craft.do"
              target="_blank"
              rel="noopener noreferrer"
            >
              Craft
            </Link>
            , helping our customers capture incredible notes and create
            beautiful documents. I also work on documentation and Developer
            Relations for{" "}
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
        <Box
          gridColumn="span 5"
          fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
        >
          <Heading fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}>
            👀 Where to find me
          </Heading>
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
      </Stack>
    </Box>
  );
}
