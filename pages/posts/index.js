import { VStack, Text, Button } from "@chakra-ui/react"
import Link from "next/link"
import { gql } from "@apollo/client"
import client from "../../apolloClient"
import PostList from "../../components/PostList"

const Posts = ({ posts }) => {
  const { posts: postsData } = posts
  return (
    <VStack maxW="100vw" bgColor="#151515" p={4}>
      <Text fontSize="2xl" fontWeight="bold" color="#FFF">
        All Posts
      </Text>
      <Link style={{ width: "100%" }} href="/">
        <Button w="100%" colorScheme="orange">
          Back
        </Button>
      </Link>
      {postsData.map((post) => (
        <PostList key={post.id} {...post} />
      ))}
    </VStack>
  )
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          body
          title
          id
          user {
            name
          }
        }
      }
    `,
  })

  return {
    props: {
      posts: data,
    },
  }
}

export default Posts
