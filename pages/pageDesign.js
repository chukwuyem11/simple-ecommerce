import React from "react";
import styles from "../styles/Home.module.css";
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Image, Center } from "@chakra-ui/react";

  const PageDesign = ({title, children}) => {
      return (
          
          <Box>
              <Center bgGradient="linear(to-l,#044CAC, #7CA4D4)" borderBottomLeftRadius="100%" borderBottomRightRadius="100%">
                  <Flex h="300px" alignItems="center"  >
                      <Box >
                          <Text fontSize={50} color="#ffffff" textAlign="center">
                             {title}
                          </Text>
                      </Box>
                  </Flex>
              </Center>
              <Box>
                  {children}
              </Box>
          </Box>
      )
  }

  export default PageDesign