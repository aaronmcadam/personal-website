import { Box, Image, Stack, Text } from "@chakra-ui/react";

export function FletcherQuote() {
  return (
    <Box
      bgColor="orange.600"
      bgImage="/assets/images/bg/quotes/fletcher.svg"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: 4, sm: 6, lg: 8 }}
        py={{ base: 16, lg: 32 }}
      >
        <Stack align="center">
          <Stack spacing={0}>
            <Image
              aria-hidden="true"
              alt="bg"
              src="/assets/images/bg/quotes/thought-balloon.svg"
              boxSize={16}
            />

            <Text
              fontWeight="bold"
              fontStyle="italic"
              fontSize={{ base: "4xl", sm: "6xl" }}
              filter="drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5))"
            >
              Thinking is drawing in your head.
            </Text>
          </Stack>
          <Text fontSize={{ base: "2xl", sm: "3xl" }} color="orange.800">
            — Alan Fletcher,{" "}
            <Box as="span" fontStyle="italic">
              The Art of Thinking Sideways
            </Box>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
