import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  Link as ChakraLink,
  Avatar,
} from "@chakra-ui/react";

export function Logo() {
  return (
    <HStack spacing={3}>
      <Avatar
        src="/me.jpg"
        size="lg"
        borderWidth="3px"
        borderColor="orange.600"
      />
      <Heading as="h1" fontSize="4xl">
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
    </HStack>
  );
}
