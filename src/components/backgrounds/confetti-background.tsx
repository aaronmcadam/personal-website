import { Box } from "@chakra-ui/react";
import { ConfettiSlice } from "./confetti-slice";

export function ConfettiBackground({}) {
  return (
    <Box w="full" pos="relative">
      <Box w="full" pos="absolute" zIndex="hide" opacity={0.6}>
        <ConfettiSlice number={1} />
        <ConfettiSlice number={2} />
        <ConfettiSlice number={3} />
        <ConfettiSlice
          number={4}
          display={{
            xl: "none",
          }}
        />
        <Box
          display={{
            sm: "none",
          }}
        >
          <ConfettiSlice number={3} />
          <ConfettiSlice number={2} />
          <ConfettiSlice number={1} />
        </Box>
      </Box>
    </Box>
  );
}
