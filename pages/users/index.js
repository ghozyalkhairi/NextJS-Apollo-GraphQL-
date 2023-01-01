import { VStack, Text, Button } from "@chakra-ui/react"
import Link from "next/link"
import { gql } from "@apollo/client"
import client from "../../apolloClient"

const Users = ({ users }) => {
  const { users: allUsers } = users
  return (
    <VStack maxW="100vw" bgColor="#151515" p={4}>
      <Text fontSize="2xl" fontWeight="bold" color="#FFF">
        All Users
      </Text>
      <Link style={{ width: "100%" }} href="/">
        <Button w="100%" colorScheme="orange">
          Back
        </Button>
      </Link>
      <VStack w="100%" spacing={4}>
        {allUsers.map((user) => (
          <Link
            key={user.id}
            style={{ width: "100%" }}
            href={`/users/${user.id}`}
          >
            <Button w="100%" colorScheme="teal" variant="outline">
              {user.name}
            </Button>
          </Link>
        ))}
      </VStack>
    </VStack>
  )
}

export const getServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Users {
        users {
          id
          name
          username
        }
      }
    `,
  })

  return {
    props: {
      users: data,
    },
  }
}

export default Users
