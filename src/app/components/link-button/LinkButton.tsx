import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

interface Props {
  text: string,
  href: string,
  colorScheme: string
  variant: string
}

export const LinkButton = ({ text, colorScheme, href,variant }: Props) => {
  return (
    <Button
      href={href}
      as={Link}
      colorScheme={colorScheme}
      variant={variant}
    >
      { text }
    </Button>
  )
}
