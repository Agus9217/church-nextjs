import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement } from "react";
import imgHero from '../app/assets/imagen-hero.jpeg'

export default function HomePage(): ReactElement {
  return (
    <Box>
      <Box
        as={Image}
        src={imgHero}
      >
      </Box>
    </Box>
  );
}
