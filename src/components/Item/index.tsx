import * as React from "react"

// Styling
import styles from './Item.module.css'

interface ItemProps {
  src: string
  alt: string
}

const Item = ({
  src,
  alt
}: ItemProps) => {
  return (
    <li>
      <img
        tabIndex={0}
        src={src}
        alt={alt}
        className={styles.item}
      />
    </li>
  )
}

export default Item
