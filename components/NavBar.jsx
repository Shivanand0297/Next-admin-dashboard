// chakra components
import { Flex, Heading } from "@chakra-ui/react"

const NavBar = () => {
  return (
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      p={2}
      mr={2}
      h="65px"
      w={"100%"}
      borderBottom="0.5px solid rgba(0, 0, 0, 0.08)"
    >
      <Heading as="h1" size="md" fontWeight={400} >Admin Dashboard</Heading>
    </Flex>
  )
}

export default NavBar