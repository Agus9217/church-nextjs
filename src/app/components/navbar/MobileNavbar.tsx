import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { IoMenuOutline } from "react-icons/io5";

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
          as={IconButton}
          icon={<IoMenuOutline />}
        />

        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

