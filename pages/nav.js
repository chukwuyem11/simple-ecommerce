import React,  {useState, createRef} from "react";
import styles from "../styles/Home.module.css";
import { Text, Box, Button, Flex, Spacer, Image,   Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, IconButton, Divider, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider, } from "@chakra-ui/react";
  import { Icon, useDisclosure } from "@chakra-ui/react"
  import {   RiShoppingCartLine, RiDeleteBin5Line } from "react-icons/ri";
  import {   GrAdd, GrSubtract } from "react-icons/gr";
  import {   ImCancelCircle } from "react-icons/im";
  import {   GiHamburgerMenu } from "react-icons/gi";

  import { useRouter } from 'next/router'


  import { useCart } from "react-use-cart";

import {
  signIn,
  signOut,
  useSession,
  getSession,
  getCsrfToken,
} from "next-auth/client";
import Link from 'next/link'


const Heading = (props) => {
  if (typeof window === "undefined") return 500;

  
    const [scrollPos, setScrollPos] = useState(window.pageYOffset);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const router = useRouter()
    
    const {
      items,
      totalItems,
      totalUniqueItems,
      cartTotal,
      metadata,
      emptyCart,
      updateItemQuantity,
      updateItem,
      removeItem,
    } = useCart();
    console.log("items")
    console.log(items)
    
    console.log("items")

     const reduceQuantity = (item) => {
    updateItemQuantity(item.id, item.quantity - 1);
  };

  const increaseQuantity = (item) => {
    updateItemQuantity(item.id, item.quantity + 1);
  };
    // On Scroll
    const onScroll = () => {
      setScrollPos(window.pageYOffset);
    };
  
    // Add and remove the window listener
    React.useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    });

    console.log(scrollPos > 20 ? "maki" : "kata")
    const [session, loading] = useSession();
    console.log(session)
    console.log(useSession())
    console.log(loading)



  
  return (
    <Box>
        
        <Flex pos="fixed"    w="100%" zIndex={2}  bg={scrollPos > 20 ? "#ffffff" : ""} boxShadow = {scrollPos > 20 ? "lg" : ""} h= {scrollPos > 20 ? "75px" : ""}>
            <Box p={5} >
            <Link href="/home">
  <Image src="logo.png" boxSize="100px" mt="-30px"  alt="Segun Adebayo" />
  </Link>

            </Box>
            <Spacer/>
            <Box display={['none', 'block', 'block']}>
              <Flex>
            <Link href="/shop">
            <Box p={5}>
              <Text color={scrollPos > 20 ? "#000000" : "#ffffff"}>
                Shop
                </Text>
            </Box>
            </Link>
            <Link href="/admin">
            <Box  p={5}>
              <Text color={scrollPos > 20 ? "#000000" : "#ffffff"}>
               my account
               </Text>
            </Box>
            </Link>
            </Flex>
            </Box>
            <Box mt="15px" display={['block', 'none', 'none']} >
            <Menu >
  <MenuButton
  
  _hover={{ bg: "" }}
  _expanded={{ bg: "transparent" }}
    as={IconButton}
    aria-label="Options"
    icon={<GiHamburgerMenu color={scrollPos > 20 ? "#000000" : "#ffffff"}/>}
    variant="outline"
  />
  <MenuList bg="#ffffff">
    <MenuItem _focus={{ bg: "" }} _hover={{ bg: "" }}>
    <Link href="/shop">
            <Box p={5}>
              <Text color="#000000" >
                Shop
                </Text>
            </Box>
            </Link>
    </MenuItem>
    <Divider />
    <MenuItem _focus={{ bg: "" }} _hover={{ bg: "" }}>
    <Link href="/admin">
            <Box  p={5}>
              <Text color= "#000000" >
               my account
               </Text>
            </Box>
            </Link>
    </MenuItem>
    
  </MenuList>
</Menu>
            </Box>
            <Box display={['none', 'block', 'block']} ref={btnRef} onClick={onOpen} p={5} color={scrollPos > 20 ? "#000000" : "#ffffff"}>
              {cartTotal}
            <Icon ref={btnRef}  ml="5px" color={scrollPos > 20 ? "#000000" : "#ffffff"} fontSize="20px" as={RiShoppingCartLine}/>

            
            </Box>
            <Box display={['block', 'none', 'none']} ref={btnRef} onClick={onOpen} p={5} color={scrollPos > 20 ? "#000000" : "#ffffff"}>
          
            <Icon ref={btnRef}  ml="5px" color={scrollPos > 20 ? "#000000" : "#ffffff"} fontSize="20px" as={RiShoppingCartLine}/>

            
            </Box>
            <Drawer
        isOpen={isOpen}
        
        size="sm"
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Products in Cart</DrawerHeader>
          <Divider orientation="horizontal" />
          <DrawerBody>
  {items.length === 0? <Text>No Products in Cart...</Text> :<Box> <Box>{items.map((item) => (<Box key={item.id}>< Box mt="15px" mb="10px"><IconButton mx="10px" aria-label="Search database" bg="#000000" colorScheme="black" color="#ffffff" onClick={ () =>removeItem(item.id)} icon={<ImCancelCircle />} /></Box><Flex> <Box><Flex><Box><Image src="shoe.jpg"  boxShadow="dark-lg" p="6" rounded="md" boxSize="100px"  alt="Segun Adebayo"  p="0" /></Box><Box ml="5"> {`Name : ${item.name}`}<br/>{`Price : ${item.price}`}<br/>{`Total Price : ${item.itemTotal}`}</Box></Flex></Box> <Box><Flex><Box><IconButton mx="10px"  aria-label="Search database" colorScheme="red" color="#ffffff" onClick={() => reduceQuantity(item)} icon= {<GrSubtract/>} /></Box> <Box>{item.quantity}</Box> <Box><IconButton mx="10px" aria-label="Search database" colorScheme="blue" color="#ffffff" onClick={ () =>increaseQuantity(item)} icon={<GrAdd />} /></Box></Flex></Box> </Flex></Box>))}</Box></Box>}
          </DrawerBody>

          <DrawerFooter>
  <Flex justifyContent="space-between" w="100%"><Box fontSize="20" fontWeight="bold">Total Price: {cartTotal}</Box><Box><Button  mr={3} onClick={() => router.push("/checkout")}>
              Checkout
            </Button>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button></Box></Flex>
          
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
            <Box p={5}>
            {!session ? (
          <div>
            {/* <Button onPress={() => signIn("github")}>GitHub Connect</Button> */}
            <Button onClick={signIn} colorScheme="blue" size="sm">
              Sign In
            </Button>
          </div>
        ) : (
          <>
            {/* <span>{session.user.name}</span>
            {session.user.image && (
              <img
                src={session.user.image}
                style={{ width: "25px", borderRadius: "50%" }}
              />
            )} */}
            <Button onClick={signOut} colorScheme="orange" size="sm">
              Sign Out
            </Button> </> )}
            </Box>

        </Flex>
      <Box>{props.children}</Box>
      
      <Box mt="50px" >
        <Flex bg="#044CAC
" p={5}>
          <Box><Text color="#ffffff" fontSize="17px">copyright 2020</Text></Box>
          <Spacer/>
          <Box><Text  color="#ffffff" fontSize="17px">Built by TNSOF</Text></Box>
        </Flex>
      </Box>
      </Box>

  );
};


export default Heading;
