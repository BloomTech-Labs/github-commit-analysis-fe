import React from 'react';
import { GoGitCommit } from 'react-icons/go';

const Spinner = (props) => <GoGitCommit className='spinner' {...props} />;
const FullPageSpinner = () => (
  <div className='full_page_spinner'>
    <Spinner />
  </div>
);

const LoginButton = () => (
  <a role='button' href='http://localhost:4000/auth/github'>
    Login with GitHub
  </a>
);
const LogoutButton = () => (
  <a role='button' href='http://localhost:4000/auth/logout'>
    Logout
  </a>
);

const Header = ({ user }) => (
  <header>
    <h1>GitStats</h1>
    {user ? <LogoutButton /> : <LoginButton />}
  </header>
);

const Footer = () => (
  <footer>
    <h1>This is the Footer!</h1>
  </footer>
);

const Layout = ({ user, children }) => (
  <React.Fragment>
    <Header user={null} />
    <main>
      <h1>Hello World</h1>
      <p>This is inside of the Layout component!</p>
      {children}
    </main>
    <Footer />
  </React.Fragment>
);

export { Spinner, FullPageSpinner, Layout };
