import React, { useCallback, useEffect, useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"

import { cn } from "@/lib/utils"

interface MagicCardProps {
  children?: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
  gradientFrom?: string
  gradientTo?: string
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#EFF6FF",
  gradientOpacity = 0.8,
  gradientFrom = "#93C5FD",
  gradientTo = "#3B82F6",
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const gradientSizeRef = useRef(gradientSize)

  useEffect(() => {
    gradientSizeRef.current = gradientSize
  }, [gradientSize])

  const reset = useCallback(() => {
    const off = -gradientSizeRef.current
    mouseX.set(off)
    mouseY.set(off)
  }, [mouseX, mouseY])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY]
  )

  useEffect(() => {
    reset()
  }, [reset])

  useEffect(() => {
    const handleGlobalPointerOut = (e: PointerEvent) => {
      if (!e.relatedTarget) reset()
    }
    const handleBlur = () => reset()
    const handleVisibility = () => {
      if (document.visibilityState !== "visible") reset()
    }

    window.addEventListener("pointerout", handleGlobalPointerOut)
    window.addEventListener("blur", handleBlur)
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      window.removeEventListener("pointerout", handleGlobalPointerOut)
      window.removeEventListener("blur", handleBlur)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [reset])

  return (
    <motion.div
      className={cn(
        "group relative isolate overflow-hidden rounded-[inherit] border border-transparent",
        className
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onPointerEnter={handlePointerMove}
      style={{
        background: useMotionTemplate`
          linear-gradient(#FFFFFF 0 0) padding-box,
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            ${gradientFrom},
            ${gradientTo},
            #E8EDF5 100%
          ) border-box
        `,
      }}
    >
      <div className="bg-surface absolute inset-px z-20 rounded-[inherit]" />

      <motion.div
        className="pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor},
              transparent 100%
            )
          `,
          opacity: gradientOpacity,
        }}
      />

      <div className="relative z-40">{children}</div>
    </motion.div>
  )
}
