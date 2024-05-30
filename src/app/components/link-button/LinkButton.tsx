'use client'

import { Button } from '@chakra-ui/react'
import { motion, TargetAndTransition, VariantLabels } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

interface Props {
  text?: string,
  href?: string,
  colorScheme?: string
  variant?: string
  whileHover?: TargetAndTransition | VariantLabels | undefined
  whileTap?: TargetAndTransition | VariantLabels | undefined
  color?: string
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement

}

const MotionLink = motion(Button)

export const LinkButton = ({ text, colorScheme, href, variant, whileHover, whileTap, color, leftIcon, rightIcon }: Props) => {
  return (
    <MotionLink
      href={href}
      as={Link}
      colorScheme={colorScheme}
      variant={variant}
      whileHover={whileHover}
      whileTap={whileTap}
      color={color}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
    >
      {text}
    </MotionLink>
  )
}
