import React from 'react';
import axios from 'axios';
import Async from 'react-async';

import { FullPageSpinner } from '../components';

const verifyToken = async (state) =>
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/verify`, {
    headers: { Authorization: `Bearer ${state.token}` },
  });

const getUser = async (state, setState) => {
  if (state && state.token) {
    verifyToken(state)
      .then((res) => {
        setState({
          ...state,
          user: res.data.user,
        });
      })
      .catch((err) => {
        console.error(err);
        setState({
          ...state,
          user: null,
          token: null,
        });
        localStorage.removeItem('token');
      });
  }
};

const AppStateContext = React.createContext();

export function AppStateProvider({ children, ...rest }) {
  const [state, setState] = React.useState({
    user: null,
    repositories: null,
    token: localStorage.getItem('token'),
  });

  /* eslint-disable */
  React.useEffect(() => {
    getUser(state, setState);
  }, [state.token]);
  /* eslint-enable */

  const logout = async () => {
    verifyToken(state)
      .then(() => {
        setState({
          ...state,
          user: null,
          token: null,
        });
        localStorage.removeItem('token');
      })
      .catch((err) => {
        console.error(err);
      });
  }; // clear the LocalStorage token and the user data

  return (
    <Async promiseFn={getUser} state={state} setState={setState}>
      <Async.Pending>
        <FullPageSpinner />
      </Async.Pending>
      <Async.Rejected>
        {(error) => (
          <div>
            <h1>Something has gone catastrophically wrong...</h1>
            <p>Smash that F5!!!</p>
            <pre>{error.message}</pre>
          </div>
        )}
      </Async.Rejected>
      <Async.Fulfilled>
        <AppStateContext.Provider value={{ state, setState, logout }} {...rest}>
          {children}
        </AppStateContext.Provider>
      </Async.Fulfilled>
    </Async>
  );
}

export const useAppState = () => {
  const context = React.useContext(AppStateContext);
  if (context === undefined)
    throw new Error(`useAppState must be used within AppStateProvider`);
  return context;
};
