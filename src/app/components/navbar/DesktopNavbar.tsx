import { ListItem, UnorderedList } from '@chakra-ui/react'
import { navItem } from './nav-items'
import { LinkButton } from '../link-button/LinkButton'

interface Props {
  display: string | undefined
}

export const DesktopNavbar = ({ display }: Props) => {

  return (
    <UnorderedList
      display={display !== 'flex' ? 'none' : 'flex'}
      styleType={'none'}
      w={'100%'}
      flexGrow={2}
      justifyContent={'center'}
      m={0}
    >
      <ListItem>
        {
          navItem.map(({ label, href }) => (
            <LinkButton
              key={label}
              text={label}
              href={href}
              colorScheme={'white'}
              variant={'ghost'}
              whileHover={{ scale: 0.95 }}
              color={'white'}
            />
          ))
        }
      </ListItem>
    </UnorderedList>
  )
}
