import { VStack, Text, Flex, Button } from "@chakra-ui/react"
import { gql } from "@apollo/client"
import client from "../../apolloClient"
import Link from "next/link"

const PostDetail = ({ post }) => {
  const { post: postData } = post
  return (
    <VStack maxW="100vw" bgColor="#151515" p={4}>
      <Link style={{ width: "100%" }} href="/posts">
        <Button w="100%" colorScheme="orange">
          Back
        </Button>
      </Link>
      <VStack w="100%" bgColor="#1f1f1f" p={4} borderRadius={4}>
        <Text fontSize="3xl" fontWeight="bold" color="white">
          {postData.title}
        </Text>
        <Text fontSize="md" color="white">
          {postData.body}
        </Text>
        <Text fontSize="md" color="white">
          Author: {postData.user.name}
        </Text>
      </VStack>
      <Text fontSize="xl" fontWeight="bold" color="white">
        Comments ({postData.comments.length})
      </Text>
      <VStack w="100%" p={4} borderRadius={4}>
        {postData.comments.map((comment) => (
          <Flex
            key={comment.id}
            w="100%"
            bgColor="#1f1f1f"
            p={4}
            borderRadius={4}
            direction="column"
          >
            <Text fontSize="md" color="white">
              {comment.body}
            </Text>
            <Text fontSize="md" color="white">
              Posted by: {comment.name}
            </Text>
            <Text fontSize="md" color="white">
              Email: {comment.email}
            </Text>
          </Flex>
        ))}
      </VStack>
    </VStack>
  )
}

export const getServerSideProps = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
      query Post($postId: ID!) {
        post(id: $postId) {
          id
          title
          body
          user {
            name
          }
          comments {
            id
            name
            email
            body
          }
        }
      }
    `,
    variables: {
      postId: params.postSlug,
    },
  })

  return {
    props: {
      post: data,
    },
  }
}

export default PostDetail
