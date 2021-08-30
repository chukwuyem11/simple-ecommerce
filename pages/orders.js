import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, {useState, createRef} from "react"
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton, Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption, Fade, ScaleFade, Slide, SlideFade, useDisclosure, Collapse  } from "@chakra-ui/react";
  import Heading from "./nav"
  import PageDesign from "./pageDesign"
  import { useRouter } from 'next/router'
  import { PlusSquareIcon } from '@chakra-ui/icons'

  const Orders = () =>{
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
  
      const { isOpen, onToggle } = useDisclosure()
    const router = useRouter()

    const postStuff = () => {
      console.log(email)
      console.log(username)
      axios
        .post("/createAdmin", {
          email: email,
          username: username,
         
        })
        .then((response) => {
          console.log(response);
          setEmail("");
          setUsername("");
         
        })
        .catch((error) => {
          console.log(error);
        });
    }
  const newStr = router.pathname.replace('/', '');
      return(
          <Heading>
              <PageDesign title={
              <Text>{newStr}</Text>}>
                <Center>
<Flex w="90%" mt="50px">
<Box>
<Button onClick={onToggle}>Add New User</Button>
      <Collapse  in={isOpen} offsetY="20px">
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
         <FormControl id="first-name" isRequired>
  <FormLabel>username</FormLabel>
  <Input placeholder="First name" onChange={(e) => setUsername(e.target.value)}
          
          value={username} />
</FormControl>
<FormControl id="email" isRequired>
  <FormLabel>email</FormLabel>
  <Input placeholder="info@email.com" type="email" onChange={(e) => setEmail(e.target.value)}
          
          value={email}/>
</FormControl>
<Button onClick={postStuff}  colorScheme="blue" size="sm">
              Submit
            </Button>
        </Box>
      </Collapse ></Box></Flex></Center>
                  <Center mt="50px">
                  <Box w="90%" boxShadow="lg" p="6" rounded="md" bg="#7CA4D4"><Flex>
                  <Table color="#ffffff" colorScheme="teal">
  <TableCaption >List of Admin</TableCaption>
  <Thead>
    <Tr >
      <Th >To convert</Th>
      <Th >into</Th>
      <Th  isNumeric>multiply by</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr >
      <Td>inches</Td>
      <Td>millimetres (mm)</Td>
      <Td isNumeric>25.4</Td>
    </Tr>
    <Tr >
      <Td>feet</Td>
      <Td>centimetres (cm)</Td>
      <Td isNumeric>30.48</Td>
    </Tr>
    <Tr>
      <Td>yards</Td>
      <Td>metres (m)</Td>
      <Td isNumeric>0.91444</Td>
    </Tr>
  </Tbody>
  <Tfoot>
    <Tr >
      <Th >To convert</Th>
      <Th  >into</Th>
      <Th  isNumeric>multiply by</Th>
    </Tr>
  </Tfoot>
</Table></Flex></Box></Center>

              </PageDesign>
          </Heading>
      )
  }

  export default Orders