import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import { Text, Box, Button, ButtonGroup, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton } from "@chakra-ui/react";
  import { useCart } from "react-use-cart";

  const config = {
    reference: (new Date()).getTime(),
    email: "user@example.com",
   
    publicKey: 'pk_test_8c426dde2d429df56342fd8a14ec3e14ea316c8a',
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

 


const PaystackHookExample = () => {
  const {
    
    cartTotal,
    
  } = useCart();

  config.amount = `${cartTotal}00`
  console.log(config.amount)


 
    const initializePayment = usePaystackPayment(config);
    return (
      <Box>
          <Text fontSize="20" fontWeight="bold" onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Check out</Text>
      </Box>
    );
};

function Pay() {
  return (
    <div className="App">
      
      
      <PaystackHookExample />
    </div>
  );
}

export default Pay;