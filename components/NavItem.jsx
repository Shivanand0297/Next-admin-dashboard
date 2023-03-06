import { Flex, Link, Menu, MenuButton, Text, Icon } from "@chakra-ui/react"

const NavItem = ({ sidebarWidth, title, icon}) => {
  return (
    <Flex  
      mt={2}
      flexDir="column"
      w="100%"
      alignItems="flex-start"

    >
      <Menu>  
        <Link
          p={2}
          borderRadius={8}
          _hover={{textDecoration: "none", backgroundColor: "#f5f5eb"}}
          w={sidebarWidth && "100%"}
          
        >
          <MenuButton
            w="100%"
          >
              <Flex
                alignItems="center"
                gap="20px"
              > 
                  <Icon as={icon} color="blackAlpha.700" />
                  <Text>{sidebarWidth && title}</Text>
              </Flex>
          </MenuButton>

        </Link>
      </Menu>
    </Flex>
  )
}

export default NavItem