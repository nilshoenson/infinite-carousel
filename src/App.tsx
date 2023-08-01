import React, { useEffect } from "react"

// Components
import Carousel from "./components/Carousel"

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
]

const App = () => {
  return (
    <div className="example">
      <Carousel images={images} gap="8px" />
      <Carousel images={images} gap="8px" reverse />
    </div>
  )
}

export default App
