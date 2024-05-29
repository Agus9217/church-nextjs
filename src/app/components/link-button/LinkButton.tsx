'use client'

import { Button } from '@chakra-ui/react'
import { motion, TargetAndTransition, VariantLabels } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

interface Props {
  text?: string,
  href: string,
  colorScheme: string
  variant: string
  whileHover?: TargetAndTransition | VariantLabels | undefined
  whileTap?: TargetAndTransition | VariantLabels | undefined
  color?: string
}

const MotionLink = motion(Button)

export const LinkButton = ({ text, colorScheme, href,variant, whileHover, color }: Props) => {
  return (
    <MotionLink
      href={href}
      as={Link}
      colorScheme={colorScheme}
      variant={variant}
      whileHover={whileHover}
      color={color}
    >
      { text }
    </MotionLink>
  )
}
