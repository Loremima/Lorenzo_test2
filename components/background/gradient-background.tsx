"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function GradientBackground() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-[#1a1f36] transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-gray-50/50 to-purple-50/50 dark:from-blue-900/20 dark:via-gray-900/20 dark:to-purple-900/20 animate-gradient" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>
    </div>
  )
}