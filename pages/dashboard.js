import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton } from "@chakra-ui/react";
  import Heading from "./nav"
  import PageDesign from "./pageDesign"
  import { useRouter } from 'next/router'
  import { PlusSquareIcon } from '@chakra-ui/icons'

  const Dashboard = () => {

    const router = useRouter()
  const newStr = router.pathname.replace('/', '');
      return(
          <Heading>
              <PageDesign title={
       <Text>{newStr}</Text>
      }>
          <Box >
              <Center mt="50px">
                  <Box>
                      <Text fontSize={50}  bgGradient="linear(to-l, #044CAC, #7CA4D4)"
  bgClip="text">
                          Total Sales : N50,000
                      </Text>
                  </Box>
              </Center>

              <Center  mt="50px">
                  <Flex justifyContent="space-between" w="90%">
                      <Box  boxShadow="dark-lg" p="6" rounded="md" bg="#5475FA
" boxSize="300px" _hover={{
    background: "#044CAC",
  }} ><Text color="#ffffff" fotSize="20px"> Admin</Text> </Box>
                      <Box boxShadow="dark-lg" p="6" rounded="md" bg="#7CA4D4" boxSize="300px" _hover={{
    background: "#044CAC",
  }}> <Text color="#ffffff" fotSize="20px"> Orders</Text></Box>
                      <Box boxShadow="dark-lg" p="6" rounded="md" bg="#A8BBF0
" boxSize="300px" _hover={{
    background: "#044CAC",
  }}> <Text color="#ffffff" fotSize="20px"> Products</Text></Box>
                  </Flex>
              </Center>
          </Box>
          </PageDesign>
          </Heading>
      )
  }

  export default Dashboard