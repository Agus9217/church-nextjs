"use client"

import { Box, Divider, Flex, Stack, useBreakpointValue } from '@chakra-ui/react'
import { DesktopNavbar } from './DesktopNavbar'
import { LinkButton } from '../link-button/LinkButton'
import { PiChurchBold } from "react-icons/pi";
import { IoLogInOutline } from "react-icons/io5";
import { MobileNavbar } from './MobileNavbar';
import { ReactElement } from 'react';

export const Navbar = (): ReactElement => {

  const display = useBreakpointValue(
    {
      base: 'none',
      lg: 'flex'
    }
  )

  return (
    <>
      <Flex
        position={'fixed'}
        as={'header'}
        w={'100%'}
        minH={'80px'}
        top={0}
        zIndex={1000}
        borderWidth={'thin'}
        borderColor={'red'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Stack
          as={'nav'}
          maxW={'95%'}
          width={'100%'}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          mx={'auto'}
        >
          <Box
            display={'flex'}
            flexGrow={1}
            maxW={'250px'}
            width={'100%'}
            color={'white'}
            borderWidth={'thin'}
            borderColor={'blue'}
          >
            <LinkButton
              href={'/'}
              text={'Iglesia Cristiana Barrio Nuevo'}
              variant={'ghost'}
              colorScheme={'white'}
              color={'white'}
              whileHover={{ scale: 0.95 }}
              leftIcon={<PiChurchBold />}
              fontSize={'16px'}
            />
          </Box>
          <DesktopNavbar display={display} />
          <Box
            display={'flex'}
            flexGrow={1}
            maxW={'250px'}
            width={'100%'}
            justifyContent={'end'}
            borderWidth={'thin'}
            borderColor={'red'}
          >
            <LinkButton
              href={'/'}
              text={'Sing In'}
              colorScheme={'teal'}
              whileTap={{ scale: 0.95 }}
              rightIcon={<IoLogInOutline />}
              display={display !== 'none' ? 'flex' : 'none'}
            />
            <MobileNavbar display={display} />
          </Box>
        </Stack>
      </Flex>
    </>
  )
}
