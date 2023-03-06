import { Flex } from "@chakra-ui/react";
import NavBar from "@components/components/NavBar";
import Sidebar from "@components/components/Sidebar";

export default function Home() {
  return (
    <Flex
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Sidebar/>
      <NavBar/>
    </Flex>    
  )
}
