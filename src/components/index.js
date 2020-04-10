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
  const { logout } = useAppState();
  return <button onClick={logout}>Logout</button>;
};

const Header = ({ user }) => (
  <header>
    <h1>GitStats</h1>
    {user ? <LogoutButton /> : <LoginButton />}
  </header>
);

const Footer = () => (
  <footer>
    <h1> </h1>
  </footer>
);

const Layout = ({ children }) => {
  const {
    state: { user },
  } = useAppState();

  return (
    <React.Fragment>
      <Header user={user} />
      <main>
        <h1>{user ? `Hello ${user.name.split(' ')[0]}!` : `Welcome!`}</h1>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export { Spinner, FullPageSpinner, Layout };
