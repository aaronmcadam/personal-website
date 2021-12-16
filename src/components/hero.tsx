import { Avatar, Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: 4, sm: 6, lg: 8, xl: 20 }}
      mt={{ base: 8, sm: 16 }}
    >
      <SimpleGrid columns={{ base: 1, sm: 12 }} spacing={8}>
        <Box gridColumn="span 8" order={{ base: 2, sm: 1 }}>
          <Heading
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            color="white"
            filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
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
            filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
          >
            Design Technologist
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="orange.500"
            filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
          >
            Product Engineer
          </Heading>
          <Heading
            as="h3"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color="yellow.500"
            filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
          >
            Typography Nerd
          </Heading>
        </Box>
        <Flex
          gridColumn="span 4"
          order={{ base: 1, sm: 2 }}
          align={{ base: "flex-start", sm: "center" }}
          justify={{ base: "flex-start", sm: "center" }}
          w="full"
        >
          <Avatar
            src="/assets/images/me.jpg"
            boxSize={{ base: 32, sm: 48, md: 56, lg: "300px" }}
            borderWidth={{ base: "4px", sm: "10px" }}
            borderColor="orange.600"
          />
        </Flex>
      </SimpleGrid>
      <Text
        filter="drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5))"
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
        color="white"
        mt={8}
        pr={{ base: 0, sm: 16, md: 24, lg: 32, xl: 48 }}
      >
        👋 I’m Aaron and I love building great products. I care as much about
        typography as I do about TypeScript—my skills stretch across design and
        engineering.
      </Text>
    </Box>
  );
}
