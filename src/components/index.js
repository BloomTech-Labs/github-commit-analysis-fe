import React from 'react';
import { GoGitCommit } from 'react-icons/go';

import { useAppState } from '../context/app-state-context.js';

const Spinner = (props) => <GoGitCommit className='spinner' {...props} />;
const FullPageSpinner = () => (
  <div className='full_page_spinner'>
    <Spinner />
  </div>
);

const LoginButton = () => (
  <a role='button' href={`${process.env.REACT_APP_BACKEND_URL}/auth/github`}>
    <button>Login with GitHub</button>
  </a>
);
const LogoutButton = () => {
  const { state, setState, logout } = useAppState();
  return <button onClick={() => logout(state, setState)}>Logout</button>;
};

const Header = () => {
  const { state } = useAppState();
  return (
    <header>
      <h1>GitStats</h1>
      {state.user ? <LogoutButton /> : <LoginButton />}
    </header>
  );
};

const Footer = () => (
  <footer>
    <h6>&lt; site footer goes here &gt;</h6>
  </footer>
);

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
);

export { Spinner, FullPageSpinner, Layout };
