import React, { useEffect } from "react"
import { Center, Flex, Img, Stack } from "@chakra-ui/react"

// Components
import InfiniteRow from "./components/InfiniteRow"

// Hooks
import { useClock } from './hooks/useClock'

const bannerOneImages = [
  "site-2.png",
  "site-4.jpeg",
  "site-5.jpeg",
  "site-7.jpeg",
  "site-8.png"
]

const Photo = ({ src, alt }) => {
  return (
    <div>
      <Img
        tabIndex={0}
        src={src}
        alt={alt}
        cursor="pointer"
        w="20vw"
        h="20vh"
        objectFit="cover"
      />
    </div>
  )
}

const Banners = () => {
  const clock = useClock()

  useEffect(() => {
    clock.start()
  }, [clock])

  return (
    <Center h="100vh" bg="black">
      <Stack spacing={6}>
        <InfiniteRow clock={clock.value}>
          <Flex gap={6} pr={6}>
            {bannerOneImages.map((img) => (
              <Photo
                key={img}
                src={img}
                alt={img}
              />
            ))}
          </Flex>
        </InfiniteRow>
      </Stack>
    </Center>
  )
}

const App = () => {
  return (
    <Banners />
  )
}

export default App
