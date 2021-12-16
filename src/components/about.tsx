import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowUpRightIcon } from "@iconicicons/react";
import { SiDiscord, SiFigma, SiGithub, SiTwitter } from "react-icons/si";

export function About() {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: 4, sm: 6, lg: 8, xl: 20 }}
      mt={{ base: 12, sm: 24 }}
    >
      <Stack spacing={12} maxW="5xl">
        <Box gridColumn="span 7">
          <Heading
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
          >
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
          <Heading
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl", lg: "5xl" }}
            filter="drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"
          >
            👀 Where to find me
          </Heading>
          <HStack spacing={0} mt={4}>
            <Text>Designing on</Text>
            <Box>
              <Button
                as="a"
                href="https://www.figma.com/@aaronmcadam"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                leftIcon={<Icon as={SiFigma} boxSize={6} color="purple.200" />}
                rightIcon={
                  <Icon as={ArrowUpRightIcon} boxSize={6} color="purple.400" />
                }
                fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                _hover={{
                  bg: "purple.800",
                }}
              >
                Figma
              </Button>
            </Box>
          </HStack>
          <HStack spacing={0}>
            <Text>Hacking on</Text>
            <Box>
              <Button
                as="a"
                href="https://github.com/aaronmcadam"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                leftIcon={<Icon as={SiGithub} boxSize={6} color="purple.200" />}
                rightIcon={
                  <Icon as={ArrowUpRightIcon} boxSize={6} color="purple.400" />
                }
                fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                _hover={{
                  bg: "purple.800",
                }}
              >
                GitHub
              </Button>
            </Box>
          </HStack>
          <HStack spacing={0}>
            <Text>Tweeting on</Text>
            <Box>
              <Button
                as="a"
                href="https://twitter.com/aaronmcadam"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                leftIcon={
                  <Icon as={SiTwitter} boxSize={6} color="purple.200" />
                }
                rightIcon={
                  <Icon as={ArrowUpRightIcon} boxSize={6} color="purple.400" />
                }
                fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                _hover={{
                  bg: "purple.800",
                }}
              >
                Twitter
              </Button>
            </Box>
          </HStack>
          <HStack spacing={0}>
            <Text>Chatting on</Text>
            <Box>
              <Button
                as="a"
                href="https://twitter.com/aaronmcadam"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                leftIcon={
                  <Icon as={SiDiscord} boxSize={6} color="purple.200" />
                }
                rightIcon={
                  <Icon as={ArrowUpRightIcon} boxSize={6} color="purple.400" />
                }
                fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                _hover={{
                  bg: "purple.800",
                }}
              >
                Discord
              </Button>
            </Box>
          </HStack>
        </Box>
      </Stack>
    </Box>
  );
}
