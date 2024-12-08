"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CloudProps {
  className?: string
  duration?: number
  delay?: number
}

export function Cloud({ className, duration = 20, delay = 0 }: CloudProps) {
  return (
    <motion.div
      className={cn(
        "absolute bg-white dark:bg-white/10 rounded-full blur-xl",
        className
      )}
      initial={{ x: "-100%" }}
      animate={{ x: "200%" }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  )
}