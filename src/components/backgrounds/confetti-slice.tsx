import { Image, ImageProps } from "@chakra-ui/react";

export interface ConfettiSliceProps extends ImageProps {
  number: number;
}

export function ConfettiSlice({ number, ...imageProps }: ConfettiSliceProps) {
  return (
    <Image
      aria-hidden="true"
      alt="background"
      src={`/assets/images/bg/confetti/${number}.svg`}
      w="full"
      {...imageProps}
    />
  );
}
