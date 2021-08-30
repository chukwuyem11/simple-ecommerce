import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, {useState, createRef} from "react"
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton } from "@chakra-ui/react";
  import Heading from "./nav"
  import PageDesign from "./pageDesign"
  import { useRouter } from 'next/router'
  import { PlusSquareIcon } from '@chakra-ui/icons'
  import Link from 'next/link'
  import { Icon } from "@chakra-ui/react"
  import {  FaBox, FaBoxes } from "react-icons/fa";
  import {   BsInboxesFill } from "react-icons/bs";


  const Products = () => {
    if (typeof window === "undefined") return 500;

  
    const [scrollPos, setScrollPos] = useState(window.pageYOffset);
  
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

      
    const router = useRouter()
  const newStr = router.pathname.replace('/', '');
      return(
          <Heading>
              <PageDesign title={
       <Text>{newStr}</Text>
      }>
          <Box >
              

              <Center  mt="100px">
             
                  <Flex justifyContent="space-between" w="90%">
                  <Link href="/category">
                      <Box overflow="hidden" boxShadow="dark-lg" p="6" rounded="md" bg="#5475FA
" boxSize="300px" _hover={{
    background: "#044CAC",
  }} ><Text color="#ffffff" fotSize="20px"> Category</Text> <Icon color="#ffffff" fontSize="300px" opacity="30%" mt="25px" as={FaBoxes}/> </Box></Link>
   <Link href="/subCategory">
                      <Box  overflow="hidden" boxShadow="dark-lg" p="6" rounded="md" bg="#7CA4D4" boxSize="300px" _hover={{
    background: "#044CAC",
  }}> <Text color="#ffffff" fotSize="20px"> Sub-category</Text><Icon color="#ffffff" fontSize="300px" opacity="30%" mt="25px" as={BsInboxesFill}/></Box></Link>
   <Link href="/myproducts">
                      <Box overflow="hidden" boxShadow="dark-lg" p="6" rounded="md" bg="#A8BBF0
" boxSize="300px" _hover={{
    background: "#044CAC",
  }}> <Text color="#ffffff" fotSize="20px"> Products</Text> <Icon color="#ffffff" fontSize="300px" opacity="30%" mt="25px" as={FaBox}/></Box></Link>
                  </Flex>
              </Center>
          </Box>
          </PageDesign>
          </Heading>
      )
  }

  export default Products