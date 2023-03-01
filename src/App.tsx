import * as React from "react"
import { Center, Flex, Img, Stack } from "@chakra-ui/react"
import InfiniteBanner from "./InfiniteBanner"
import { useClock } from "./hooks"

const bannerOneImages = [
  "site-2.png",
  "site-4.jpeg",
  "site-5.jpeg",
  "site-7.jpeg",
  "site-8.png"
]

const Photo = ({ src, alt, onClick }) => {
  return (
    <div onClick={onClick}>
      <Img
        tabIndex={0}
        src={src}
        alt={alt}
        cursor="pointer"
        w="20vw"
        h="20vh"
        objectFit="cover"
        border="6px solid white"
      />
    </div>
  )
}

const Banners = () => {
  const clock = useClock()

  React.useEffect(() => {
    clock.start()
  }, [clock])

  return (
    <Stack spacing={6}>
      <InfiniteBanner clock={clock.value}>
        <Flex gap={6} pr={6}>
          {bannerOneImages.map((img) => (
            <Photo
              key={img}
              src={img}
              alt={img}
              onClick={() => clock.stop()}
            />
          ))}
        </Flex>
      </InfiniteBanner>
    </Stack>
  )
}

const App = () => {
  return (
    <Center h="100vh" bg="black">
      <Banners />
    </Center>
  )
}

export default App
