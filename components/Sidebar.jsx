import { Flex, Divider, Avatar, Heading, Text, IconButton, Button } from "@chakra-ui/react"
import { useState } from "react"
import { FaBars, FaCalendar, FaFolder, FaTags, FaTasks, FaWallet } from "react-icons/fa"
import SidebarNavItem from "./SidebarNavItem"

const Sidebar = () => {

  // state to change the sidebar width on click
  const [sidebarWidth, setSidebarWidth] = useState(true) // by default sidebar is collapsed


  return (
    // main flex container
    <Flex
      pos="sticky"
      left="0"
      minHeight="100vh"
      p={2}
      // boxShadow="4px 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRight = "0.5px solid rgba(0, 0, 0, 0.08)"
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

      <Flex
        justifyContent="space-between"
        alignItems="center"
        w="100%"
      >
        {/* logo */}
        <Heading as="h1" size="md" display={sidebarWidth ? "flex" : "none"} >
          Flows list
        </Heading>

        {/* menu icon button */}
        <IconButton
          background="none"
          p={2}
          _hover={{background: "none"}}
          icon={<FaBars fontSize='20px' />}
          onClick={()=>setSidebarWidth(!sidebarWidth)}
          justifyContent="flex-start"
          />
      </Flex>

      {/* add task button */}
      <Button
        bgColor="#d3f36b"
        _hover={{background: "#d3f36b"}}
        mt="2rem"
      >
        {sidebarWidth ? "+ Add new task" : "+"}
      </Button>

      {/* navItems */}
      <SidebarNavItem sidebarWidth={sidebarWidth} title="Plan" icon={FaCalendar} />
      <SidebarNavItem sidebarWidth={sidebarWidth} title="Task" icon={FaTasks} />
      <SidebarNavItem sidebarWidth={sidebarWidth} title="Projects" icon={FaFolder} />
      <SidebarNavItem sidebarWidth={sidebarWidth} title="Tags" icon={FaTags} />
      <SidebarNavItem sidebarWidth={sidebarWidth} title="Free Plan" icon={FaWallet} />

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