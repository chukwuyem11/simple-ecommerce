import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, {useState, createRef} from "react"
import axios from "axios";
import useSWR , {SWRConfig}from "swr";
import swr, { mutate } from "swr";

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
  TableCaption, Fade, ScaleFade, Slide, SlideFade, useDisclosure, Collapse, Spinner, Skeleton, SkeletonCircle, SkeletonText  } from "@chakra-ui/react";
  import Heading from "./nav"
  import PageDesign from "./pageDesign"
  import { useRouter } from 'next/router'
  import {  DeleteIcon , EditIcon} from '@chakra-ui/icons'
  import Fuse from "fuse.js";
  import Select from 'react-select';

  const subCategory = () =>{
    const { data, error } = useSWR("/api/createSubcategory", axios);
    const {data: user} = useSWR("/api/createCategory", axios)


    
    
    const [name, setName] = React.useState("");
    const [image, setImage] = React.useState("");
    const [catname, setCatname] = React.useState("");

    console.log("data")
    console.log(user)
    console.log("data")
      const { isOpen, onToggle } = useDisclosure()
    const router = useRouter()

    const postStuff = () => {
      console.log(name)
      console.log(image)
      console.log(catname.catname.label)
      axios
        .post("/api/createSubcategory", {
            name: name,
            image: image,
            catname: catname.catname.value
         
        })
        .then((response) => {
          console.log(response);
          setName("");
          setImage("");
          setCatname("");
          mutate("/api/createSubcategory");
         
        })
        .catch((error) => {
          console.log(error);
        });
    }

    
console.log(user)

const options = user?.data?.names.map((name)=>(
  { value: name.id, label: name.name }
  
));

const handleChange = catname => {
  setCatname({ catname });
  console.log("Option selected:, catname");
  console.log(`Option selected:`, catname);
  console.log("`Option selected:`, catname");
};
    
  const newStr = router.pathname.replace('/', '');
  if (error) return <Heading> <PageDesign title={
    <Text>{newStr}</Text>}><Center mt="50px">
  <Box>
      <Text fontSize={50}  bgGradient="linear(to-l, #044CAC, #7CA4D4)"
bgClip="text">
          Error, please try again...
      </Text>
  </Box>
</Center></PageDesign></Heading>;
    console.log(error);
    if (!data) return (<Heading><PageDesign title={
        <Text>{newStr}</Text>}><Flex mt="50px" align="center" alignItems="center" justify="center" >
        <Spinner size="xl" />
     </Flex></PageDesign></Heading>)


console.log(data)
      return(
          <Heading>
              <PageDesign title={
              <Text>{newStr}</Text>}>
                <Center>
<Flex w="90%" mt="50px">
<Box>
<Button onClick={onToggle}>Add New User</Button>
      <Collapse  in={isOpen} offsetY="20px">
        <Box mt="4">
          <Text mb="4">Select a Category</Text>

      <Select
        value={catname?.label}
        onChange={handleChange}
        options={options}
        name={catname?.label}
      />
      </Box>
      
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
         <FormControl id="first-name" isRequired>
  <FormLabel>Name</FormLabel>
  <Input placeholder="First name" onChange={(e) => setName(e.target.value)}
          
          value={name} />
</FormControl>
<FormControl id="first-name" isRequired>
  
</FormControl>
<FormControl id="email" isRequired>
  <FormLabel>Image</FormLabel>
  <Input placeholder="info@email.com" type="email" onChange={(e) => setImage(e.target.value)}
          
          value={image}/>
</FormControl>

<Button onClick={postStuff}  colorScheme="blue" size="sm">
              Submit
            </Button>
        </Box>
      </Collapse ></Box></Flex></Center>

      { data.data.names.length === 0 ? <Center mt="50px">
                  <Box>
                      <Text fontSize={50}  bgGradient="linear(to-l, #044CAC, #7CA4D4)"
  bgClip="text">
                          No Sub-Categories
                      </Text>
                  </Box>
              </Center> : <Center mt="50px">
                  <Box w="90%" boxShadow="lg" p="6" rounded="md" bg="#7CA4D4"><Flex>
                  <Table color="#ffffff" colorScheme="teal">
  <TableCaption >List of Admin</TableCaption>
  <Thead>
    <Tr >
      <Th >Image</Th>
      <Th >Name</Th>
      <Th >Category</Th>
      <Th  >Delete/Edit</Th>
    </Tr>
  </Thead>
  <Tbody>
      {
          data.data.names.map((names) => (<Tr key={names.id} >
            <Td><Image src="shoe.jpg"  boxShadow="dark-lg" p="6" rounded="md" boxSize="100px"  alt="Segun Adebayo"  p="0" /></Td>
            <Td>{names.name}</Td>
            <Td>{names.categories.name}</Td>
            <Td ><Flex><IconButton mx="10px" aria-label="Search database" colorScheme="blue" icon={<EditIcon />} /><IconButton mx="10px"  aria-label="Search database" colorScheme="red" icon={<DeleteIcon />} /></Flex></Td>
          </Tr>))
      }
   
  </Tbody>
  <Tfoot>
    <Tr >
    <Th >Image</Th>
      <Th >Name</Th>
      <Th >Category</Th>
      <Th  >Edit/Delete</Th>
    </Tr>
  </Tfoot>
</Table></Flex></Box></Center> }
                  

              </PageDesign>
          </Heading>
      )
  }

  export default subCategory