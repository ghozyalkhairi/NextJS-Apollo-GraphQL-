import { VStack, Text } from "@chakra-ui/react"
import Link from "next/link"

const PostList = ({ title, body, user, id }) => {
  return (
    <VStack
      _hover={{
        transform: "scale(0.98)",
        transition: "all 0.2s ease-in-out",
      }}
      w="100%"
      bgColor="#1f1f1f"
      p={4}
      borderRadius={4}
    >
      <Link style={{ width: "100%" }} href={`/posts/${id}`}>
        <Text fontSize="xl" fontWeight="bold" color="white">
          {title}
        </Text>
        <Text fontSize="md" color="white">
          {body}
        </Text>
        <Text fontSize="md" color="white">
          by {user.name}
        </Text>
      </Link>
    </VStack>
  )
}

export default PostList
