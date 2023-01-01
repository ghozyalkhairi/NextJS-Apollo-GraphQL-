import { VStack, Text, Button, Flex, Spacer } from "@chakra-ui/react"
import Link from "next/link"

const Home = () => {
  return (
    <VStack h="100vh" maxW="100vw" bgColor="#151515" p={10}>
      <Text fontSize="2xl" color="#F2F2F2">
        Simple Forum
      </Text>
      <Flex w="100%" justifyContent="center" direction="column">
        <Link style={{ width: "100%", marginBottom: "1rem" }} href="/posts">
          <Button fontSize="xl" w="100%" colorScheme="teal" variant="outline">
            Posts
          </Button>
        </Link>
        <Link style={{ width: "100%" }} href="/users">
          <Button fontSize="xl" w="100%" colorScheme="teal" variant="outline">
            Users
          </Button>
        </Link>
      </Flex>
    </VStack>
  )
}

export default Home
