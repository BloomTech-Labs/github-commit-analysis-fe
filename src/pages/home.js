import React from 'react';
import { Text, Box, Flex, ButtonOutline } from '@primer/components';
import styled from 'styled-components';

const logoImage = require('../images/Gitstats-logo-color-02.png');
const Logo = styled.img`
display: block;
height: 120px;
`

const LoginButton = () => (
  <a role='button' href={`${process.env.REACT_APP_BACKEND_URL}/auth/github`}>
      <ButtonOutline bg='#0A9AEC' color='#000000' borderColor='#cccccc'>Login with GitHub</ButtonOutline>
  </a>
);

export default () => (

  <Box width="97%" marginTop='5.5rem' marginBottom='1rem'>
    <Flex
        width='100%'
        padding='1rem'
        flexDirection={['column']}
        alignItems='center'
      >
      <Logo  src={logoImage} alt={'Gitstats color logo'} />
      <Text fontSize='1.8rem' fontFamily='Helvetica' marginBottom='3rem' marginTop='1rem'>
        An Objective Approach to Identifying Successful Repos
      </Text>
      <LoginButton />
      <Text fontSize='1.5rem' fontFamily='Helvetica' marginTop='1rem'>
        Please log in with your GitHub account to access the dashboard
      </Text>
    </Flex>
  </Box>
);
