import { VStack, Text, Button } from "@chakra-ui/react"
import Link from "next/link"
import { gql } from "@apollo/client"
import client from "../../apolloClient"
import PostList from "../../components/PostList"

const User = ({ user }) => {
  const { user: userData } = user
  return (
    <VStack maxW="100vw" bgColor="#151515" p={4}>
      <Link style={{ width: "100%" }} href="/users">
        <Button w="100%" colorScheme="orange">
          Back
        </Button>
      </Link>
      <Text fontSize="2xl" fontWeight="bold" color="#FFF">
        {userData.name}
      </Text>
      <Text fontSize="xl" fontWeight="bold" color="#FFF">
        Username: {userData.username}
      </Text>
      <Text fontSize="xl" fontWeight="bold" color="#FFF">
        Email: {userData.email}
      </Text>
      <Text fontSize="xl" fontWeight="bold" color="#FFF">
        Address: {userData.address.city}
      </Text>
      <Text fontSize="xl" fontWeight="bold" color="#FFF">
        Company: {userData.company.name}
      </Text>
      <Text fontSize="2xl" fontWeight="bold" color="#FFF">
        Posts by {userData.name}
      </Text>
      <VStack w="100%" spacing={4}>
        {userData.posts.map((post) => (
          <PostList key={post.id} {...post} />
        ))}
      </VStack>
    </VStack>
  )
}

export const getServerSideProps = async ({ params }) => {
  const { data } = await client.query({
    query: gql`
      query User($id: ID!) {
        user(id: $id) {
          id
          name
          username
          email
          address {
            city
          }
          company {
            name
          }
          posts {
            id
            title
            body
            user {
              name
            }
          }
        }
      }
    `,
    variables: {
      id: params.userSlug,
    },
  })

  return {
    props: {
      user: data,
    },
  }
}

export default User
