import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import imgHero from '../app/assets/imagen-hero.jpeg'

export default function HomePage() {
  return (
    <Box
      position={'relative'}
    >
      <Box
        as={Image}
        src={imgHero}
        filter={'brightness(60%)'}
      />
      <Flex
        position={'absolute'}
        top={'50%'}
        left={'50%'}
        transform={'translate(-50%, -50%)'}
        color={'white'}
        direction={'column'}
        textAlign={'center'}
        borderWidth={'thin'}
        borderColor={'cyan'}
        maxWidth={'80%'}
        width={'100%'}
      >
        <Heading
          fontSize={{ base: '3xl', lg: '8xl', md: '6xl' }}
        >
          Bienvenidos a nuestra Iglesia
        </Heading>
        <Text
          maxWidth={'70%'}
          width={'100%'}
          textAlign={'center'}
          mx={'auto'}
        >
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
        </Text>
      </Flex>
    </Box>
  );
}
