import Head from "next/head";
import React, {useState, createRef} from "react"
import axios from "axios";
import useSWR from "swr";
import swr, { mutate } from "swr";

import { Text, Box, Button,  Flex,  Center, Divider, Image ,  useDisclosure, Collapse, Spinner,  Textarea, Avatar, AvatarBadge, AvatarGroup,Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb, Icon, HStack  } from "@chakra-ui/react";
  import Heading from "../nav"
  import PageDesign from "../pageDesign"
  import { useRouter } from 'next/router'
  import {  DeleteIcon , EditIcon} from '@chakra-ui/icons'
  import {
    signIn,
    signOut,
    useSession,
    getSession,
    getCsrfToken,
  } from "next-auth/client";
  import {   AiTwotoneStar } from "react-icons/ai";
  import {    BiReset } from "react-icons/bi";


  const Category = () =>{
    const router = useRouter()


    const { data, error } = useSWR(`/products/${router.query.id}`, axios);
    console.log(data)
    const [body, setBody] = React.useState("");
    const [rating, setRating] = React.useState(0);

    const [session, loading] = useSession();

  
      const { isOpen, onToggle } = useDisclosure()

    
    const addReview = () => {
        axios.post("../createReviews", {
            body: body,
            rating: rating,
            productid: Number(router.query.id)
        }).then((res) => {
            console.log(res)
            setBody("")
            setRating(0)
            mutate(`/products/${router.query.id}`);
            
        }).catch((error) => {
            console.log(error);
          });
    }
  const newStr = router.pathname.replace('/', '');
  if (error) return <div>error</div>;
    console.log(error);
    if (!data) return (<Heading><PageDesign title={
        <Text>Product</Text>}><Flex mt="50px" align="center" alignItems="center" justify="center" >
        <Spinner size="xl" />
     </Flex></PageDesign></Heading>)


console.log(rating)
      return(
          <Heading>
              <PageDesign title={
              <Text>Product</Text>}>
                  <Center mt="100px">
                
                    <Flex w="90%" >
                        <Box><Image src="../shoe.jpg"  boxShadow="dark-lg" p="6" rounded="md" boxSize="600" mt="-30px"  alt="Segun Adebayo"  p="0" /></Box>
                        <Box ml="100px"><Box ><Text fontSize="30px" fontWeight="bold">Name</Text><Text fontSize="20px" color="#b2beb5">{data.data.name}</Text></Box>
                        <Box mt="50px"><Text fontSize="30px" fontWeight="bold">Category</Text>{data.data.category.map((cate) => (<Text fontSize="20px" color="#b2beb5">{cate.name}</Text>))}</Box>
                        <Box mt="50px"><Text fontSize="30px" fontWeight="bold">Sub-Categoty</Text>{data.data.subcategories.map((scate) => (<Text fontSize="20px" color="#b2beb5">{scate.name}</Text>))}</Box>
                        <Box mt="50px"><Text fontSize="30px" fontWeight="bold">Price</Text><Text fontSize="20px" color="#b2beb5">{data.data.price}</Text></Box>

                        <Box mt="50px"><Button>Add to cart</Button></Box>
                        </Box>
                    </Flex>
                    </Center>
                    <Center mt="100px">
                        <Flex  w="90%">
                        <Box w="100%">
                            <Text fontSize="30px" fontWeight="bold">
                            Reviews </Text>
                            <Divider colorScheme="blackAlpha"/>
                        </Box>
                       
                        </Flex>
                        
                    </Center>
                    <Center mt="50px">
                        <Flex w="90%">
                            <Box>
                            <Box>
  
  <Button onClick={onToggle}>Add Your Review</Button>
        <Collapse  in={isOpen} offsetY="20px">
          <Box mt="4">
              <Box>
                  <Flex>
    <Box w="50%">
  
       
           <Textarea h="30px" placeholder="Write your review" onChange={(e) => setBody(e.target.value)}
          
              value={body} /> <HStack mt="10px" bg="#000000" p="5px" borderRadius="5px"><Icon onClick={() => setRating(1)} w={10} h={10}  ml="5px" color={rating >= 1 ? "yellow" : "#f5f5f5"} borderSize={rating >= 3 ? "1" : "0"}  as={AiTwotoneStar} /> <Icon onClick={() => setRating(2)} w={10} h={10}    ml="5px" color={rating >= 2 ? "yellow" : "#f5f5f5"} borderSize={rating > 3 ? "1" : "0"} fontSize="20px" as={AiTwotoneStar}/> <Icon onClick={() => setRating(3)} w={10} h={10}    ml="5px" color={rating >= 3 ? "yellow" : "#f5f5f5"} borderSize={rating > 3 ? "1" : "0"} fontSize="20px" as={AiTwotoneStar}/> <Icon onClick={() => setRating(4)} w={10} h={10}   ml="5px" color={rating >= 4 ? "yellow" : "#f5f5f5"} borderSize={rating > 3 ? "1" : "0"} fontSize="20px" as={AiTwotoneStar}/> <Icon onClick={() => setRating(5)} w={10} h={10}   ml="5px" color={rating >= 5 ? "yellow" : "#f5f5f5"} borderSize={rating > 3 ? "1" : "0"} fontSize="20px" as={AiTwotoneStar}/><Icon onClick={() => setRating(0)} w={10} h={10}   ml="5px" color={rating === 0 ? "#ffffff" : "#f5f5f5"} borderSize={rating > 3 ? "1" : "0"} fontSize="20px" as={BiReset}/></HStack></Box>  </Flex></Box>
  <Button onClick={addReview}  colorScheme="blue" mt="10px" size="sm">
                Submit
              </Button>
          </Box>
        </Collapse ></Box>
                    <Box mt="50px"   overflow="scroll" zIndex={2} p="10px" w="100%" border="1px" w="600px" h="500px" borderRadius="5px" borderColor="#b2beb5"> <Box>{data.data.reviews.map((rev) => (<Box mt="20px"><Flex><Box><Avatar name={session?.token.name}  /></Box><Box bg="#f5f5f5" p="10px" borderRadius="5px" ml="5px"><Text> {rev.body} </Text>
                    
                    <HStack mt="10px"   bg="#ffffff" p="5px" borderRadius="5px"><Icon  w={8} h={8}  ml="5px" color={rev.rating >= 1 ? "yellow" : "#f5f5f5"} borderSize={rev.rating >= 3 ? "1" : "0"}  as={AiTwotoneStar} /> <Icon   w={8} h={8}    ml="5px" color={rev.rating >= 2 ? "yellow" : "#f5f5f5"} borderSize={rating > 3 ? "1" : "0"} fontSize="20px" as={AiTwotoneStar}/> <Icon   w={8} h={8}     ml="5px" color={rev.rating >= 3 ? "yellow" : "#f5f5f5"} borderSize={rating > 3 ? "1" : "0"} fontSize="20px" as={AiTwotoneStar}/> <Icon  w={8} h={8}    ml="5px" color={rev.rating >= 4 ? "yellow" : "#f5f5f5"} borderSize={rating > 3 ? "1" : "0"} fontSize="20px" as={AiTwotoneStar}/> <Icon w={8} h={8}    ml="5px" color={rev.rating >= 5 ? "yellow" : "#f5f5f5"} borderSize={rating > 3 ? "1" : "0"} fontSize="20px" as={AiTwotoneStar}/></HStack></Box></Flex></Box>))}
                        </Box> </Box>

</Box>
</Flex>
                    </Center>
              
                   

              </PageDesign>
          </Heading>
      )
  }

  export default Category