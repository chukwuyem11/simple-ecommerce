import React from "react";
import styles from "../styles/Home.module.css";
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton, Spinner } from "@chakra-ui/react";
  import Link from 'next/link'
  import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  import { PlusSquareIcon } from '@chakra-ui/icons'
  import useSWR , {SWRConfig}from "swr";
  import axios from "axios";
  import { useCart } from "react-use-cart";

import {
  signIn,
  signOut,
  useSession,
  getSession,
  getCsrfToken,
} from "next-auth/client";
import { useRouter } from 'next/router'


import Heading from "./nav"



const Home = () => {
  const { data, error } = useSWR("/createProducts", axios);

  const { addItem } = useCart();
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
          dots: true
        }
      }
    ]
  };
  if (error) return <Heading> <Box bg="#f5f5f5">
    
  <Center bgGradient="linear(to-l,#044CAC, #7CA4D4)">
  <Flex  h="600px" alignItems="center" justifyContent="space-between" w="90%"  >  
<Box p="4" w="50%" >
<Text fontSize={50} color="#ffffff">
Your Feet Deserves the best
</Text>
</Box>

<Box p="4" w="50%"  >
Box 2
</Box>
</Flex>
</Center>

<Center>
  
<Flex w="90%" justify="center"  mt="-100px" boxShadow="lg" p="6" rounded="md" bg="white" >
  <Box w="100%"   >
<Slider {...settings}>

            <Box  >
            <Center>
          <Image src="logo.png" boxSize="200px" mt="-30px" ml="20px" alt="Segun Adebayo" /></Center>
  <Text fontSize={20} color="#000000" textAlign="center">
 Bag making
</Text></Box>
         
<Box  >
            <Center>
          <Image src="logo.png" boxSize="200px" mt="-30px" ml="20px" alt="Segun Adebayo" /></Center>
  <Text fontSize={20} color="#000000" textAlign="center">
 Shoe making
</Text></Box>
         
<Box  >
            <Center>
          <Image src="logo.png" boxSize="200px" mt="-30px" ml="20px" alt="Segun Adebayo" /></Center>
  <Text fontSize={20} color="#000000" textAlign="center">
 Leather making
</Text></Box>
          
        </Slider>
        </Box>
        </Flex>
</Center>

<Center mt="100px" pb="10%">

<Flex w="90%" flexDirection={["column", "row", "row"]} justifyContent="space-between">
    
    
<Box>
    <Container>
    <Box  >
<Text fontSize="30px">Who are we</Text>
</Box>
    There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production
    </Container>

</Box>
<Box>
    <Container>
    <Image src="shoe.jpg"  boxShadow="dark-lg" p="6" rounded="md" w="500px" h="334px" mt={["30px", "-30px", "-30px"]}  alt="Segun Adebayo"  p="0" />
    </Container>

</Box>

</Flex>
</Center>
</Box>

<Box mt="100px">

<Text fontSize="30px" textAlign="center">Our Products</Text></Box> <Center> <Box>
      <Text fontSize={20}  color="#000000">
          Error, please try again...
      </Text>
  </Box>
  </Center>
</Heading>;
    console.log(error);
    if (!data) return (<Heading>
        <Box bg="#f5f5f5">
    
    <Center bgGradient="linear(to-l,#044CAC, #7CA4D4)">
    <Flex  h="600px" alignItems="center" justifyContent="space-between" w="90%"  >  
<Box p="4" w="50%" >
<Text fontSize={50} color="#ffffff">
Your Feet Deserves the best
</Text>
</Box>

<Box p="4" w="50%"  >
Box 2
</Box>
</Flex>
</Center>

<Center>
  
<Flex w="90%" justify="center"  mt="-100px" boxShadow="lg" p="6" rounded="md" bg="white" >
  <Box w="100%"   >
<Slider {...settings}>

            <Box  >
            <Center>
          <Image src="logo.png" boxSize="200px" mt="-30px" ml="20px" alt="Segun Adebayo" /></Center>
  <Text fontSize={20} color="#000000" textAlign="center">
 Bag making
</Text></Box>
         
<Box  >
            <Center>
          <Image src="logo.png" boxSize="200px" mt="-30px" ml="20px" alt="Segun Adebayo" /></Center>
  <Text fontSize={20} color="#000000" textAlign="center">
 Shoe making
</Text></Box>
         
<Box  >
            <Center>
          <Image src="logo.png" boxSize="200px" mt="-30px" ml="20px" alt="Segun Adebayo" /></Center>
  <Text fontSize={20} color="#000000" textAlign="center">
 Leather making
</Text></Box>
          
        </Slider>
        </Box>
        </Flex>
</Center>

<Center mt="100px" pb="10%">

<Flex w="90%" flexDirection={["column", "row", "row"]} justifyContent="space-between">
    
    
<Box>
    <Container>
    <Box  >
<Text fontSize="30px">Who are we</Text>
</Box>
    There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production
    </Container>

</Box>
<Box>
    <Container>
    <Image src="shoe.jpg"  boxShadow="dark-lg" p="6" rounded="md" w="500px" h="334px" mt={["30px", "-30px", "-30px"]}  alt="Segun Adebayo"  p="0" />
    </Container>

</Box>

</Flex>
</Center>
</Box>

<Box mt="100px">

<Text fontSize="30px" textAlign="center">Our Products</Text></Box><Flex mt="50px" align="center" alignItems="center" justify="center" >
        <Spinner size="xl" />
     </Flex></Heading>)
    return(
        <Heading>
            <Box bg="#f5f5f5">
        
        <Center bgGradient="linear(to-l,#044CAC, #7CA4D4)">
        <Flex  h="600px" alignItems="center" justifyContent="space-between" w="90%"  >  
  <Box p="4" w="50%" >
 <Text fontSize={50} color="#ffffff">
    Your Feet Deserves the best
    </Text>
  </Box>
  
  <Box p="4" w="50%"  >
    Box 2
  </Box>
</Flex>
</Center>

<Center>
  
<Flex w="90%" justify="center"  mt="-100px" boxShadow="lg" p="6" rounded="md" bg="white" >
  <Box w="100%"   >
<Slider {...settings}>

            <Box  >
            <Center>
          <Image src="logo.png" boxSize="200px" mt="-30px" ml="20px" alt="Segun Adebayo" /></Center>
  <Text fontSize={20} color="#000000" textAlign="center">
 Bag making
</Text></Box>
         
<Box  >
            <Center>
          <Image src="logo.png" boxSize="200px" mt="-30px" ml="20px" alt="Segun Adebayo" /></Center>
  <Text fontSize={20} color="#000000" textAlign="center">
 Shoe making
</Text></Box>
         
<Box  >
            <Center>
          <Image src="logo.png" boxSize="200px" mt="-30px" ml="20px" alt="Segun Adebayo" /></Center>
  <Text fontSize={20} color="#000000" textAlign="center">
 Leather making
</Text></Box>
          
        </Slider>
        </Box>
        </Flex>
</Center>

<Center mt="100px" pb="10%">

<Flex w="90%" flexDirection={["column", "row", "row"]} justifyContent="space-between">
    
    
<Box>
    <Container>
    <Box  >
<Text fontSize="30px">Who are we</Text>
</Box>
    There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production
    </Container>

</Box>
<Box>
    <Container>
    <Image src="shoe.jpg"  boxShadow="dark-lg" p="6" rounded="md" w="500px" h="334px" mt={["30px", "-30px", "-30px"]}  alt="Segun Adebayo"  p="0" />
    </Container>

</Box>

</Flex>
</Center>
</Box>

<Box mt="100px">

<Text fontSize="30px" textAlign="center">Our Products</Text>




    { data.data.names.length === 0 ? <Center mt="50px">
                  <Box>
                      <Text fontSize={30}  bgGradient="linear(to-l, #044CAC, #7CA4D4)"
  bgClip="text">
                          No Products
                      </Text>
                  </Box>
              </Center> : <Center mt="50px"> <Flex w="90%" alignItems="center"  justifyContent="space-between">
    


    {data.data.names.map((names) => ( <Flex  >
     
        <Center > <Flex flexWrap="wrap" justifyContent="space-between" flexDirection={["column", "row", "row"]}> <Box key={names.id} boxShadow="lg" p="6" rounded="md" bg="white"><Image src="shoe.jpg"  boxShadow="dark-lg" p="6" rounded="md" w="260px" h="334px" mt="-30px"  alt="Segun Adebayo"  p="0" /><Box mt="40px">
    <Flex justifyContent="space-between">
        <Box>
<Text>{names.name}</Text>
    <Text>{names.price}</Text>
    </Box>
    <Box>
    <IconButton
    color="#044CAC"
    variant="outline"

  colorScheme="blue"
  aria-label="Search database"
  onClick={() => addItem(names)}
  icon={<PlusSquareIcon />}
/>
</Box>
</Flex>   </Box> </Box></Flex></Center> 
  
</Flex>))} 
</Flex> </Center>}
    
    

<Center>
<Flex w="90%" mt="50px">
<Button colorScheme="blue" size="md">
    Shop all
  </Button>
</Flex>
</Center>

</Box>


        </Heading>
    )
}

export default Home