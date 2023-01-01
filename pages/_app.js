import { ChakraProvider, Portal, Progress } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true)
    }
    const handleComplete = (url) => {
      setLoading(false)
    }
    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)
    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  })
  return (
    <ChakraProvider portalZIndex={2}>
      {loading && (
        <Portal>
          <Progress
            position="fixed"
            size="xs"
            top={0}
            left={0}
            w="100%"
            isIndeterminate
          />
        </Portal>
      )}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
