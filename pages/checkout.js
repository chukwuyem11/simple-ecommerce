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
  import { RiAdminFill } from "react-icons/ri";
  import {  FaBox } from "react-icons/fa";
  import {  BsCardChecklist } from "react-icons/bs";

  import Slider from "react-slick";
  import { useCart } from "react-use-cart";
import Pay from "./payment"
  const Checkout = () => {
    // if (typeof window === "undefined") return 500;
    
    
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

      console.log(` Total: ${cartTotal}.00`)
      
    const router = useRouter()
  const newStr = router.pathname.replace('/', '');
      return(
          <Heading>
              <PageDesign title={
       <Text>{newStr}</Text>
      }>
          <Box >
              <Center mt="50px">
                  <Flex w="90%" justifyContent="space-between" >
                      <Box w="70%" mr="10px">
                      <Text fontSize="30" fontWeight="bold">Delivery Details</Text>
                          <Divider />
                          
                      <FormControl id="first-name" isRequired mt="10px">
                      <Flex w="100%" justifyContent="space-between" >
                          <Box w="50%" mr="5px">
  <FormLabel>First name</FormLabel>
  <Input placeholder="First name" />
  </Box>
  <Box w="50%">
  <FormLabel>Last Name</FormLabel>
  <Input placeholder="First name" />
  </Box>
  </Flex>
  <Flex justifyContent="space-between">
      <Box w="50%" mr="5px">
  <FormLabel>Email address</FormLabel>
  <Input placeholder="First name" />
  </Box>
  <Box w="50%">
  <FormLabel>Phone Number</FormLabel>
  <Input placeholder="First name" />
  </Box>
  </Flex>
  <FormLabel>State</FormLabel>
  <Input placeholder="First name" />
  <FormLabel>Address</FormLabel>
  <Input placeholder="First name" />
  <FormLabel>Delivery address(if different)</FormLabel>
  <Input placeholder="First name" />
  
</FormControl>
                      </Box>
                      <Box w="30%">
                          <Box>
                          <Text fontSize="30" fontWeight="bold">Product List</Text>
                          <Divider />
                          </Box>
                          <Box mt="10px">
    {items.map((item) =>(<Box key={item.id}><Flex w="100%" justifyContent="space-between" ><Box><Text>{item.name}  x {item.quantity}</Text></Box> <Box> <Text>{item.itemTotal}</Text></Box></Flex></Box>))}
  <Box><Flex w="100%" justifyContent="space-between" ><Box><Text fontSize="20" fontWeight="bold">Total</Text></Box> <Box><Text fontSize="20" fontWeight="bold">{cartTotal}</Text></Box></Flex><Box mt="10px"><Divider /><Pay /><Divider /></Box></Box>
                          </Box>

                      </Box>
                      
                  </Flex>
              </Center>
          </Box>
          </PageDesign>
          </Heading>
      )
  }

  export default Checkout