// importing chakara components from chakra
import { Flex, Link, Menu, MenuButton, Text, Icon } from "@chakra-ui/react";

// state to manage options 
import { useState } from "react";

// react icons
import { FaArrowDown, FaArrowUp, FaSquare } from "react-icons/fa";

const SidebarNavItem = ({ sidebarWidth, title, icon }) => {

  // state to hide and display the text on clicking the navItems
  const [showOptions, setShowOptions] = useState(false);

  return (
    <Flex mt={2} flexDir="column" w="100%" alignItems="flex-start">
      <Menu>
        <Link
          p={2}
          borderRadius={8}
          _hover={{ textDecoration: "none", backgroundColor: "#f5f5eb" }}
          w={sidebarWidth && "100%"}
          onClick={() => setShowOptions(!showOptions)}
        >
          <MenuButton w="100%">
            {/* main div for items */}
            <Flex
              flexDir={"column"}
              alignItems="flex-start"
              justifyContent="space-between"
            >
              {/* flex for single div */}
              <Flex
                justifyContent="space-between"
                w="100%"
                alignItems="center"
              >
                {/* div for displaying icon and title */}
                <Flex alignItems="center" gap="20px">
                  <Icon as={icon} color="blackAlpha.700" />
                  <Text>{sidebarWidth && title}</Text>
                </Flex>
                
                {/* to flip the arrow up and down on clicking when sidebar is open*/}
                { sidebarWidth && 
                  <>
                      { showOptions ? <FaArrowUp fontSize='10px' /> : <FaArrowDown fontSize='10px' />}
                  </> 
                }
              </Flex>

              {/* dropdown options */}
              {showOptions && (
                <Flex flexDir="column" gap={1} marginTop="10px">
                  {/* option 1 */}
                  <Flex
                    alignItems="center"
                    gap="20px"
                    justifyContent="flex-start"
                    ml={"4"}
                  >
                    {
                      sidebarWidth &&
                      <>
                        <FaSquare color="pink" />
                        <Text>{"Meridian"}</Text>
                      </>
                    }
                    
                  </Flex>
                  {/* option 2 */}
                  <Flex
                    alignItems="center"
                    gap="20px"
                    justifyContent="flex-start"
                    ml={"4"}
                  >
                   {
                      sidebarWidth &&
                      <>
                        <FaSquare color="blue" />
                        <Text>{"Risen"}</Text>
                      </>
                    }
                  </Flex>
                </Flex>
              )}
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default SidebarNavItem;
