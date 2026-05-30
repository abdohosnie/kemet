'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition } from '../../lib/animations'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="flex flex-col flex-1 w-full"
    >
      {children}
    </motion.div>
  )
}
