import React from "react";
import { GoGitCommit } from "react-icons/go";
import {
  Box,
  ButtonOutline,
  Flex,
  Heading,
  Link,
  Fixed,
} from "@primer/components";
import { useAppState } from "../context/app-state-context.js";
import styled from "styled-components";
const logoImage = require("../images/Gitstats-logo-white-02.png");

const Logo = styled.img`
  position: fixed;
  height: 30px;
`;

const Spinner = (props) => <GoGitCommit className="spinner" {...props} />;
const FullPageSpinner = () => (
  <div className="full_page_spinner">
    <Spinner />
  </div>
);

const LoginButton = () => (
  <a role="button" href={`${process.env.REACT_APP_BACKEND_URL}/auth/github`}>
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
    <Box
      className="header"
      as={Fixed}
      width="100%"
      top={0}
      bg="#0A9AEC"
      borderBottom="1"
      borderRadius="0"
      borderColor="#cccccc"
    >
      <Flex
        padding="1rem"
        flexDirection={["column", "row"]}
        flexWrap="nowrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          fontFamily="Helvetica"
          fontSize="2.5em"
          color="white"
          paddingBottom="25px"
        >
          <Logo src={logoImage} alt={"Gitstats white logo"} />
        </Heading>
        <Heading fontFamily="Helvetica" fontSize="1.0em" color="white">
          {!state.user ?
            <span>
              <Link
                href="/"
                fontFamily="Helvetica"
                fontSize="1.0em"
                color="white"
                marginRight="15px"
              >
                Home
              </Link>
              <Link
                href="/about"
                fontFamily="Helvetica"
                fontSize="1.0em"
                color="white"
                marginRight="15px"
              >
                About
              </Link>
            </span> :
            null
          }
          {state.user ? <LogoutButton /> : <LoginButton />}
        </Heading>
      </Flex>
    </Box>
  );
};

const Layout = ({ children }) => (
  <Box bg="#fefefe">
    <Header />
    <Box marginX="auto" width="100%">
      {children}
    </Box>
  </Box>
);

export { Spinner, FullPageSpinner, Layout };
