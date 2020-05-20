import React from "react";
import { Flex, Heading, Fixed } from "@primer/components";

const Footer = () => {
  return (
    <Flex as={Fixed} width='100%' height='75px' bg='#0A9AEC' bottom={0} borderColor='#cccccc'
      alignItems='center'
      justifyContent='flex-end'
    >
      <Heading fontFamily='Helvetica' fontSize='20px' color='#FFFFFF' padding='1rem'>
        @Copyright 2020
      </Heading>
    </Flex>
  )
};

export default Footer;