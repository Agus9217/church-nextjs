"use client"

import { Box, Divider, Flex, Stack, useBreakpointValue } from '@chakra-ui/react'
import { DesktopNavbar } from './DesktopNavbar'
import { LinkButton } from '../link-button/LinkButton'
import { PiChurchBold } from "react-icons/pi";
import { IoLogInOutline } from "react-icons/io5";
import { MobileNavbar } from './MobileNavbar';


export const Navbar = () => {

  const display = useBreakpointValue(
    {
      base: 'none',
      lg: 'flex'
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
          borderWidth={'thin'}
          borderColor={'red'}
          as={'nav'}
          maxW={'95%'}
          width={'100%'}
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
            width={'100%'}
            color={'white'}
          >
            <LinkButton
              href={'/'}
              text={'Iglesia Cristiana Barrio Nuevo'}
              variant={'ghost'}
              colorScheme={'white'}
              color={'white'}
              whileHover={{ scale: 0.95 }}
              leftIcon={<PiChurchBold />}
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
            borderColor={'blue'}
          >
            <LinkButton
              href={'/'}
              text={'SignIn'}
              colorScheme={'teal'}
              whileTap={{ scale: 0.95 }}
              rightIcon={<IoLogInOutline size={'22px'} />}
            />
            <MobileNavbar display={display} />
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
