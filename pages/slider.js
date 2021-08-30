import React, { Component } from "react";
import Slider from "react-slick";
import { Text, Box, Button, ButtonGroup, FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input,  Stack, HStack, VStack, Flex, Spacer, Grid, GridItem, Center, Divider, Image , Container, Wrap, WrapItem, IconButton } from "@chakra-ui/react";

const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true
      };
    return(
        <Flex>
        <Box w="30%" >
        <h2> Single Item</h2>
        <Slider {...settings}>
          <Box bg="#f5f5f5" >
          <Box alignItems="center">
          <Image src="logo.png" boxSize="200px" mt="-30px"  alt="Segun Adebayo" />
  <Text fontSize={20} color="#000000" textAlign="center">
 Bag making
</Text></Box>
          </Box>
          <Box bg="#f5f5f5" p="10px" borderRadius="5px" m="5px">
            <h3>2</h3>
          </Box>
          <Box bg="#f5f5f5" p="10px" borderRadius="5px" m="5px">
            <h3>3</h3>
          </Box>
          <Box bg="#f5f5f5" p="10px" borderRadius="5px" m="5px">
            <h3>4</h3>
          </Box>
          <Box bg="#f5f5f5" p="10px" borderRadius="5px" m="5px">
            <h3>5</h3>
          </Box>
          <Box bg="#f5f5f5" p="10px" borderRadius="5px" m="5px">
            <h3>6</h3>
          </Box>
        </Slider>
      </Box>
      </Flex>
    )
}

export default Slide