import { Avatar, Box, Heading, Stack, Text } from "@chakra-ui/react";

export function Hero() {
  return (
    <Box maxW="7xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} mt={16}>
      <Stack spacing={10} direction="row" px={{ base: 0, sm: 14, lg: 16 }}>
        <Box>
          <Heading fontSize="6xl" fontWeight="bold" color="white">
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
          <Heading as="h3" fontSize="5xl" fontWeight="bold" color="orange.600">
            Design Technologist
          </Heading>
          <Heading as="h3" fontSize="5xl" fontWeight="bold" color="orange.500">
            Product Engineer
          </Heading>
          <Heading as="h3" fontSize="5xl" fontWeight="bold" color="yellow.500">
            Typography Nerd
          </Heading>
          <Text fontSize="3xl" color="white" mt={8}>
            👋 I’m Aaron and I’m passionate about building great products. I
            care as much about typography as I do about TypeScript—my skills
            stretch across design and engineering.
          </Text>
        </Box>
        <Avatar
          src="/me.jpg"
          boxSize="300px"
          borderWidth="10px"
          borderColor="orange.600"
        />
      </Stack>
    </Box>
  );
}
