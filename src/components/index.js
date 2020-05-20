import React from 'react';
import { GoGitCommit } from 'react-icons/go';
import { Box, ButtonOutline, Flex, Heading } from '@primer/components';

import { useAppState } from '../context/app-state-context.js';

import Footer from '../components/Footer';

const Spinner = (props) => <GoGitCommit className='spinner' {...props} />;
const FullPageSpinner = () => (
  <div className='full_page_spinner'>
    <Spinner />
  </div>
);

const LoginButton = () => (
  <a role='button' href={`${process.env.REACT_APP_BACKEND_URL}/auth/github`}>
    <ButtonOutline>Login with GitHub</ButtonOutline>
  </a>
);
const LogoutButton = () => {
  const { state, setState, logout } = useAppState();
  return (
    <ButtonOutline onClick={() => logout(state, setState)}>
      Logout
    </ButtonOutline>
  );
};

const Header = () => {
  const { state } = useAppState();
  return (
    <Box bg='#eeeeee' borderBottom='1' borderRadius='0' borderColor='#cccccc'>
      <Flex
        marginX='auto'
        maxWidth='800px'
        padding='1rem'
        flexDirection={['column', 'row']}
        flexWrap='nowrap'
        alignItems='center'
        justifyContent='space-between'
      >
        <Heading fontFamily='Helvetica' fontSize='2.5em' color='#333333'>
          GitStats
        </Heading>
        {state.user ? <LogoutButton /> : <LoginButton />}
      </Flex>
    </Box>
  );
};

const Layout = ({ children }) => (
  <Box height='100vh' bg='#fefefe'>
    <Header />
    <Box marginX='auto' maxWidth='800px' paddingX='2rem'>
      {children}
    </Box>
    <Footer />
  </Box>
);

export { Spinner, FullPageSpinner, Layout };
