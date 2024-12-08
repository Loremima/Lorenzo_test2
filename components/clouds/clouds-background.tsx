"use client"

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function CloudsBackground() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Video background of moving clouds */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/clouds.mp4" type="video/mp4" />
        {/* Provide a fallback message or image if needed */}
      </video>
    </div>
  )
}
