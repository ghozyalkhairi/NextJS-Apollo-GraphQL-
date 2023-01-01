import { VStack, Text, Flex, Spacer, Button } from "@chakra-ui/react"
import { gql } from "@apollo/client"
import client from "../../apolloClient"
import Link from "next/link"

const PostDetail = ({ post }) => {
  const { post: postData } = post
  return (
    <VStack h="100vh" maxW="100vw" bgColor="#151515" p={4}>
      <Link style={{ width: "100%" }} href="/posts">
        <Button w="100%" colorScheme="orange">
          Back
        </Button>
      </Link>
      <VStack w="100%" bgColor="#1f1f1f" p={4} borderRadius={4}>
        <Text fontSize="xl" fontWeight="bold" color="white">
          {postData.title}
        </Text>
        <Text fontSize="md" color="white">
          {postData.body}
        </Text>

        <Text fontSize="md" color="white">
          Posted by: {postData.user.name}
        </Text>
      </VStack>
    </VStack>
  )
}

export const getServerSideProps = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
      query Post($postId: ID!) {
        post(id: $postId) {
          title
          body
          id
          user {
            name
            company {
              name
            }
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
