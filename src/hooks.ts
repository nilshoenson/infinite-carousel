import * as React from "react"
import { useAnimationFrame, useMotionValue } from "framer-motion"

export const useClock = ({
  defaultValue = 0,
  reverse = false,
  speed = 1
} = {}) => {
  const clock = useMotionValue(defaultValue)
  const paused = React.useRef(false)

  useAnimationFrame((t, dt) => {
    if (paused.current) {
      return
    }
    
    if (reverse) {
      clock.set(clock.get() - dt * speed)
    } else {
      clock.set(clock.get() + dt * speed)
    }
  })

  return {
    value: clock,
    stop: () => {
      paused.current = true
    },
    start: () => {
      paused.current = false
    }
  }
}
