import React, { useEffect } from "react"

// Components
import InfiniteRow from "../InfiniteRow"
import Item from "../Item"

// Hooks
import { useClock } from '../../hooks/useClock'

// Styling
import styles from './Carousel.module.css'

interface CarouselProps {
  images: string[]
  gap: string
  reverse?: boolean
}

const Carousel = ({
  images,
  gap,
  reverse
}: CarouselProps) => {
  const clock = useClock({ reverse })

  useEffect(() => {
    clock.start()
  }, [clock])

  return (
    <InfiniteRow clock={clock.value} reverse={reverse}>
      <ul
        className={styles.wrapper}
        style={{
          '--gap': `${gap}`
        } as React.CSSProperties}
      >
        {images.map((img) => (
          <Item
            key={img}
            src={img}
            alt={img}
          />
        ))}
      </ul>
    </InfiniteRow>
  )
}

export default Carousel
