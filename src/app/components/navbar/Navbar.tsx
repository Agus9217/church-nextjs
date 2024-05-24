"use client"

import { Box, Button, Divider, Flex, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const MotionLink = motion(Button)

export const Navbar = () => {

  return (
    <>
      <Flex
        as={'header'}
        w={'100%'}
        minH={'80px'}
      >
        <Stack
          as={'nav'}
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
            <Link
              href={'/'}
            >
              Iglesia Cristiana Barrio Nuevo
            </Link>
          </Box>
          <UnorderedList
            display={'flex'}
            styleType={'none'}
            flexGrow={2}
            justifyContent={'center'}
            gap={8}
          >
            <ListItem>
              <MotionLink
                as={Link}
                colorScheme={'blue'}
                href={'/nosotros'}
                variant={'ghost'}
                whileHover={{ scale: 0.95 }}
              >
                Nosotros
              </MotionLink>
            </ListItem>
            <ListItem>
              <MotionLink
                as={Link}
                colorScheme={'blue'}
                href={'/ministerios'}
                variant={'ghost'}
                whileHover={{ scale: 0.95 }}
              >
                Ministerios
              </MotionLink>
            </ListItem>
            <ListItem>
              <MotionLink
                as={Link}
                colorScheme={'blue'}
                href={'/servicios'}
                variant={'ghost'}
                whileHover={{ scale: 0.95 }}
              >
                Servicios
              </MotionLink>
            </ListItem>
            <ListItem>
              <MotionLink
                as={Link}
                colorScheme={'blue'}
                href={'/contacto'}
                variant={'ghost'}
                whileHover={{ scale: 0.95 }}
              >
                Contacto
              </MotionLink>
            </ListItem>
          </UnorderedList>
          <Box
            display={'flex'}
            flexGrow={1}
            maxW={'250px'}
            justifyContent={'end'}
          >
            <Button
              as={motion.button}
              colorScheme={'teal'}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              SingIn
            </Button>
          </Box>
        </Stack>
      </Flex>
      <Divider
        borderWidth={'1px'}
        colorScheme='red'
      />
    </>
  )
}
