
import { Box, Button, Flex, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <Flex
      as={'header'}
      w={'100%'}
      borderWidth={'thin'}
      borderColor={'cyan'}
    >
      <Stack
        as={'nav'}
        borderWidth={'thin'}
        borderColor={'red'}
        w={'70%'}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mx={'auto'}
      >
        <Box
          display={'flex'}
          flexGrow={1}
          maxW={'250px'}
        >
          <Text>
            Iglesia Cristiana Barrio Nuevo
          </Text>
        </Box>
        <UnorderedList
          display={'flex'}
          styleType={'none'}
          flexGrow={2}
          borderWidth={'thin'}
          borderColor={'green'}
          justifyContent={'center'}
          gap={8}
        >
          <ListItem>
            <Link href={'/nosotros'}>Nosotros</Link>
          </ListItem>
          <ListItem>
            <Link href={'/ministerios'}>Ministerios</Link>
          </ListItem>
          <ListItem>
            <Link href={'/servicios'}>Servicios</Link>
          </ListItem>
          <ListItem>
            <Link href={'/contacto'}>Contacto</Link>
          </ListItem>
        </UnorderedList>
        <Box
          display={'flex'}
          flexGrow={1}
          maxW={'250px'}
          justifyContent={'end'}
        >
          <Button>
            SingIn
          </Button>
        </Box>
      </Stack>
    </Flex>
  )
}
