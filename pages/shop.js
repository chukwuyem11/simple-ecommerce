import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton, Spinner  } from "@chakra-ui/react";
  import Link from 'next/link'

  import Heading from "./nav"
  import PageDesign from "./pageDesign"
  import { useRouter } from 'next/router'
  import { PlusSquareIcon } from '@chakra-ui/icons'
  import useSWR , {SWRConfig}from "swr";
  import axios from "axios";
  import { useCart } from "react-use-cart";


export default function Shop() {
  const { data, error } = useSWR("/createProducts", axios);

  const { addItem } = useCart();

  const router = useRouter()
  const newStr = router.pathname.replace('/', '');

  if (error) return <Heading> <PageDesign title={
    <Text>{newStr}</Text>}><Center mt="50px">
  <Box>
      <Text fontSize={30}  color="#000000">
          Error, please try again...
      </Text>
  </Box>
</Center></PageDesign></Heading>;
    console.log(error);
    if (!data) return (<Heading><PageDesign title={
        <Text>{newStr}</Text>}><Flex mt="50px" align="center" alignItems="center" justify="center" >
        <Spinner size="xl" />
     </Flex></PageDesign></Heading>)

  return (

    
    <Heading>
      <PageDesign title={
       <Text>{newStr}</Text>
      }>
    
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
    


    {data.data.names.map((names) => ( <Wrap spacing="130px">
      <WrapItem>
        <Center > <Link href={`product/${names.id}`}><Box boxShadow="lg" p="6" rounded="md" bg="white"><Image src="shoe.jpg"  boxShadow="dark-lg" p="6" rounded="md" w="260px" h="334px" mt="-30px"  alt="Segun Adebayo"  p="0" /><Box mt="40px">
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
</Flex>   </Box></Box></Link> </Center> 
  </WrapItem>
</Wrap>))} 
</Flex> </Center>}
</Box>
    </PageDesign>
    </Heading>
  );
}
