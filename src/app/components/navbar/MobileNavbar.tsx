import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { IoMenuOutline } from "react-icons/io5";
import { navItem } from "./nav-items";
import { ReactElement } from "react";

interface Props {
  display: string | undefined
}

export const MobileNavbar = ({ display }: Props) => {
  return (
    <Box
      display={display === 'none' ? 'block' : 'none'}
    >
      <Menu>
        <MenuButton
          colorScheme={'teal'}
          as={IconButton}
          icon={<IoMenuOutline />}
          fontSize={'1.5rem'}
        />
        <MenuList>
          {
            navItem.map(({ label }: { label: string }): ReactElement => (
              <MenuItem key={label}>
                {label}
              </MenuItem>
            ))
          }
        </MenuList>
      </Menu>
    </Box>
  )
}

