'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  delay?: number
}

export default function SectionReveal({
  children,
  className = '',
  threshold = 0.15,
  delay = 0,
}: SectionRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  const localVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as any,
        delay: delay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={localVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
