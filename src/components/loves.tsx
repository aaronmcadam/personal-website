import { Box, Heading, Stack, Text } from "@chakra-ui/react";

export function Loves() {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }}>
      <Heading>❤️ What I love</Heading>
      <Text>Anime</Text>
      <Text>Books</Text>
      <Text>Music</Text>
      <Text>Films</Text>
    </Box>
  );
}
