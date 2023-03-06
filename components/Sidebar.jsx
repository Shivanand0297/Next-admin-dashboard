import { Flex, Divider, Avatar, Heading, Text, IconButton, Button } from "@chakra-ui/react"
import { useState } from "react"
import { FaBars, FaCalendar, FaFolder, FaTags, FaTasks, FaWallet } from "react-icons/fa"
import NavItem from "./NavItem"

const Sidebar = () => {

  // state to change the sidebar width on click
  const [sidebarWidth, setSidebarWidth] = useState(false) // by default sidebar is collapsed


  return (
    // main flex container
    <Flex
      pos="sticky"
      left="0"
      h="100vh"
      p={2}
      boxShadow="4px 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={sidebarWidth ? "210px" : "115px"}
      transition="all 0.05s ease-out"
      flexDir="column"
      justifyContent="space-between"
      alignItems="flex-start"

    >

    {/* Sidebar contents */}
    <Flex
      flexDir={"column"}
      p={1.5}
      alignItems="flex-start"
      as="nav"
      >

      {/* logo */}
      <Heading as="h1" size="md">
        Flows list
      </Heading>


      {/* menu icon button */}
      <IconButton
        background="none"
        mt={5}
        p={2}
        _hover={{background: "none"}}
        icon={<FaBars fontSize='20px' />}
        onClick={()=>setSidebarWidth(!sidebarWidth)}
        justifyContent="flex-start"
      />

      {/* add task button */}
      <Button
        bgColor="#d3f36b"
        _hover={{background: "#d3f36b"}}
        mt="2rem"
      >
        {sidebarWidth ? "+ Add new task" : "+"}
      </Button>



      {/* navItems */}
      <NavItem sidebarWidth={sidebarWidth} title="Plan" icon={FaCalendar} />
      <NavItem sidebarWidth={sidebarWidth} title="Task" icon={FaTasks} />
      <NavItem sidebarWidth={sidebarWidth} title="Projects" icon={FaFolder} />
      <NavItem sidebarWidth={sidebarWidth} title="Tags" icon={FaTags} />
      <NavItem sidebarWidth={sidebarWidth} title="Free Plan" icon={FaWallet} />

    </Flex>

      {/* for profile pic and details */}
      <Flex
        p={2}
        flexDir="column"
        w="100%"
        alignItems="flex-start"
        mb={5}

      >
        <Divider/>

        <Flex mt={4} align="center" >
          <Avatar size="sm"/>
          <Flex flexDir="column" ml={4} display={sidebarWidth ? "flex" : "none"} >
            <Heading as="h3" size="sm" >Shiva</Heading>
            <Text color="gray" >Admin</Text>
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  )
}

export default Sidebar