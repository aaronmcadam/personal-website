import {
  extendTheme,
  ThemeConfig,
  withDefaultVariant,
  theme as base,
} from "@chakra-ui/react";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { Button } from "./components/button";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme(
  {
    config,
    components: {
      Button,
      Link: {
        baseStyle: {
          textDecoration: "underline",
          textDecorationThickness: "1px",
          textUnderlineOffset: "4px",
          fontWeight: "semibold",
          color: "orange.500",
        },
      },
    },
    colors: colors,
    breakpoints: breakpoints,
    fonts: {
      heading: `"Cartridge", ${base.fonts.heading}`,
      body: "minion-3, serif",
    },
    styles: {
      global: {
        "::selection": {
          bg: "orange.600",
        },
        body: {
          bg: "indigo.900",
          bgGradient: "linear(to-r, purple.900, indigo.900)",
          color: "white",
        },
      },
    },
  },
  withDefaultVariant({
    variant: "secondary",
    components: ["Button"],
  })
);
