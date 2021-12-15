import { Avatar, Box, Heading, Stack, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: 4, sm: 6, lg: 8, xl: 20 }}
      mt={{ base: 8, sm: 16 }}
    >
      <Stack direction={{ base: "column-reverse", sm: "row" }} spacing={10}>
        <Box>
          <Heading
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            color="white"
          >
            <Box
              as="span"
              css={{
                fontFeatureSettings: '"ss01"',
              }}
            >
              Aaron{" "}
            </Box>
            McAdam
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="orange.600"
          >
            Design Technologist
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="orange.500"
          >
            Product Engineer
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="yellow.500"
          >
            Typography Nerd
          </Heading>
          <Text
            fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
            color="white"
            mt={8}
          >
            👋 I’m Aaron and I love building great products. I care as much
            about typography as I do about TypeScript—my skills stretch across
            design and engineering.
          </Text>
        </Box>
        <Avatar
          src="/me.jpg"
          boxSize={{ base: 32, sm: 48, md: 56, lg: "300px" }}
          borderWidth={{ base: "4px", sm: "10px" }}
          borderColor="orange.600"
        />
      </Stack>
    </Box>
  );
}
