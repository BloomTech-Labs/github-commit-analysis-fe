import React from 'react';
import { useAsync } from 'react-async';

import { FullPageSpinner } from '../components';

const AuthContext = React.createContext();

const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
const getUser = () =>
  sleep(1000).then(() => ({ user: { username: 'user' }, repositories: [] }));
// .then(() => ({ user: null, repositories: [] }));

function AuthProvider(props) {
  const {
    data = { user: null, repositories: [] },
    error,
    isRejected,
    isPending,
  } = useAsync({
    promiseFn: getUser,
  });

  if (isPending) return <FullPageSpinner />;
  if (isRejected)
    return (
      <div>
        <p>Smash that F5!!!</p>
        <pre>{error.message}</pre>
      </div>
    );

  const login = () => {}; //make the login request
  const logout = () => {}; // clear the LocalStorage token and the user data

  return <AuthContext.Provider value={{ data, login, logout }} {...props} />;
}

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export { AuthProvider, useAuth };
