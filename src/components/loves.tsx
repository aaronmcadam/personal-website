import {
  Image,
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

export function Loves() {
  return (
    <Box
      mt={{ base: 12, sm: 24 }}
      bgColor="white"
      bgImage="/assets/images/bg/things-i-love.svg"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: 4, sm: 6, lg: 8, xl: 20 }}
        py={{ base: 12, sm: 24 }}
      >
        <Stack align="center">
          <Heading
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            p={2}
            display="inline-block"
            bg="purple.100"
            color="purple.900"
          >
            ❤️ Things I love
          </Heading>
          <Text
            fontSize={{ base: "xl", md: "4xl" }}
            p={2}
            display="inline-block"
            bg="purple.100"
            color="purple.900"
          >
            I’m into a lot of different stuff! Here’s a few of the things I
            really enjoy:
          </Text>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={5}
          mt={{ base: 8, md: 16 }}
        >
          <Flex
            p={8}
            align="center"
            justify="space-between"
            bgGradient="linear(to-r, rose.400, rose.600)"
            rounded="2xl"
            h={48}
          >
            <Image
              src="/assets/images/bg/loves/anime.svg"
              alt="bg"
              transform="rotate(-27deg)"
            />
            <Heading
              as="h4"
              alignSelf="flex-end"
              fontSize="3xl"
              color="rose.100"
            >
              Anime
            </Heading>
          </Flex>
          <Flex
            p={8}
            align="center"
            justify="space-between"
            bgGradient="linear(to-r, green.600, green.400)"
            rounded="2xl"
            h={48}
          >
            <Heading
              as="h4"
              alignSelf="flex-end"
              fontSize="3xl"
              color="green.100"
            >
              Books
            </Heading>
            <Image
              src="/assets/images/bg/loves/books.svg"
              alt="bg"
              transform="rotate(27deg)"
            />
          </Flex>
        </SimpleGrid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt={5}>
          <Flex
            p={8}
            align="center"
            justify="space-between"
            bgGradient="linear(to-r, sky.400, sky.600)"
            rounded="2xl"
            h={48}
          >
            <Image src="/assets/images/bg/loves/music.svg" alt="bg" />
            <Heading
              as="h4"
              alignSelf="flex-end"
              fontSize="3xl"
              color="sky.100"
            >
              Music
            </Heading>
          </Flex>
          <Flex
            p={8}
            align="center"
            justify="space-between"
            bgGradient="linear(to-r, yellow.600, yellow.400)"
            rounded="2xl"
            h={48}
          >
            <Heading
              as="h4"
              alignSelf="flex-end"
              fontSize="3xl"
              color="yellow.100"
            >
              Films
            </Heading>
            <Image
              src="/assets/images/bg/loves/films.svg"
              alt="bg"
              transform="rotate(22deg)"
            />
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
