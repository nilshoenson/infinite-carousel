import * as React from "react"
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useTransform
} from "framer-motion"

// Styling
import styles from './InfiniteRow.module.css'

interface InfiniteRowProps extends React.HTMLProps<HTMLDivElement> {
  clock: MotionValue<number>
  loopDuration?: number
  children: React.ReactNode
  reverse?: boolean
}

const InfiniteRow = ({
  clock,
  loopDuration = 20000,
  children,
  reverse
}: InfiniteRowProps) => {
  const progress = useTransform(
    clock,
    (time) => (time % loopDuration) / loopDuration
  )
  const percentage = useTransform(progress, (t) => t * 100)
  const translateX = useMotionTemplate`${(percentage)}%`

  return (
    <div
      className={styles.wrapper}
    >
      <motion.div className={styles.inner} style={{ translateX }}>
        <div>{children}</div>
        <div className={`${styles.copy} ${reverse ? styles.right : styles.left}`}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export default InfiniteRow
