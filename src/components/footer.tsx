import { Box, HStack, Icon, IconButton, Stack, Text } from "@chakra-ui/react";
import { SiGithub, SiTwitter } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      py={{ base: 6, sm: 12 }}
      px={{ base: 4, sm: 6, lg: 8 }}
      maxW="7xl"
      mx="auto"
    >
      <Stack
        spacing={{ base: 8, sm: 0 }}
        direction={{ base: "column-reverse", sm: "row" }}
        justify="space-between"
        align="center"
      >
        <Text textAlign={{ base: "center", sm: "left" }}>
          &copy; 2021–{currentYear} Aaron McAdam. All rights reserved.
        </Text>
        <HStack spacing={6}>
          <IconButton
            as="a"
            aria-label="Twitter"
            href="https://twitter.com/aaronmcadam"
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            _hover={{
              bg: "transparent",
            }}
            icon={
              <Icon
                as={SiTwitter}
                boxSize={6}
                color="purple.300"
                _hover={{ color: "purple.400" }}
              />
            }
          />
          <IconButton
            as="a"
            aria-label="GitHub"
            href="https://github.com/aaronmcadam"
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            _hover={{
              bg: "transparent",
            }}
            icon={
              <Icon
                as={SiGithub}
                boxSize={6}
                color="purple.300"
                _hover={{ color: "purple.400" }}
              />
            }
          />
        </HStack>
      </Stack>
    </Box>
  );
}
