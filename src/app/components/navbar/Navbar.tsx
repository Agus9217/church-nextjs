"use client"

import { Box, Button, Divider, Flex, Stack, useBreakpointValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { DesktopNavbar } from './DesktopNavbar'
import { LinkButton } from '../link-button/LinkButton'

export const Navbar = () => {

  const display = useBreakpointValue(
    {
      base: 'none',
      md: 'flex'
    }
  )

  return (
    <>
      <Flex
        as={'header'}
        w={'100%'}
        minH={'80px'}
        bg={'gray.500'}
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
            borderWidth={'thin'}
            borderColor={'cyan'}
            display={'flex'}
            flexGrow={1}
            maxW={'250px'}
            color={'white'}
          >
            <LinkButton
              href={'/'}
              text={'Iglesia Cristiana Barrio Nuevo'}
              variant={'ghost'}
              colorScheme={'white'}
              color={'white'}
              whileHover={{ scale: 0.95 }}
            />
          </Box>
          <DesktopNavbar display={display} />
          <Box
            display={'flex'}
            flexGrow={1}
            maxW={'250px'}
            justifyContent={'end'}
            borderWidth={'thin'}
            borderColor={'blue'}
          >
            <Button
              as={motion.button}
              colorScheme={'teal'}
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
