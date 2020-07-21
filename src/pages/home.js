import React from 'react';
import { Text, Flex, ButtonOutline } from '@primer/components';
import styled from 'styled-components';
import Footer from '../components/Footer';

const logoImage = require('../images/Gitstats-logo-color-02.png');

const Logo = styled.img`
display: block;
height: 34%;
`

const MidDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  width: 97%;
`

const LoginButton = () => (
  <a role='button' href={`${process.env.REACT_APP_BACKEND_URL}/auth/github`}>
      <ButtonOutline bg='#0A9AEC' color='#000000' borderColor='#cccccc'>Login with GitHub</ButtonOutline>
  </a>
);

export default () => (

  <MidDiv >
    <Flex
        width='100%'
        padding='1rem'
        flexDirection={['column']}
        alignItems='center'
        height='420px'
        justifyContent='space-evenly'
      >
      <Logo  src={logoImage} alt={'Gitstats color logo'} />
      <Text fontSize='1.8rem' fontFamily='Helvetica' marginBottom='1rem'>
        An Objective Approach to Identifying Successful Repos
      </Text>
      <LoginButton />
      <Text fontSize='1.5rem' fontFamily='Helvetica' marginTop='1rem'>
        Please log in with your GitHub account to access the dashboard
      </Text>
    </Flex>
    <Footer />
  </MidDiv>
);
