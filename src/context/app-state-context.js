import React from 'react';
import axios from 'axios';

import { FullPageSpinner } from '../components';

const getData = async (token, path) => {
  let { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}${path}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  return data;
};

const fetchUserData = async (state) => ({
  userData: await getData(state.token, `/auth/verify`),
  repoData: await getData(state.token, `/repo`),
});

const repositoryListItemClickHandler = (state, setState, repository) => {
  if (state.activeItem && state.activeItem.id === repository.id)
    setState({ ...state, activeItem: null });
  else
    setState({
      ...state,
      activeItem: repository,
    });
};

const logout = async (state, setState) => {
  await getData(state.token, `/auth/logout`)
    .then(() => {
      setState(initialState);
      localStorage.setItem('state', JSON.stringify(initialState));
    })
    .catch((err) => {
      console.error(`Logout unsuccessful. Please try again.`, err);
    });
};

const initialState = {
  user: null,
  repositories: null,
  activeItem: null,
  token: null,
};

export const AppStateContext = React.createContext();

export const AppStateProvider = ({ children, ...rest }) => {
  const hash = new URL(document.location).hash;
  if (!localStorage.getItem('state'))
    localStorage.setItem(`state`, JSON.stringify(initialState));
  if (hash.valueOf('jwt'))
    localStorage.setItem(
      `state`,
      JSON.stringify({
        ...initialState,
        token: hash.valueOf('jwt').substring(5),
      }),
    );

  const [state, setState] = React.useState(
    JSON.parse(localStorage.getItem('state')),
  );
  const [error, setError] = React.useState(undefined);

  if (state.token && !(state.user || state.repositories || error)) {
    fetchUserData(state)
      .then((data) => {
        let { userData, repoData } = data;
        return {
          user: userData.user,
          repositories: repoData.repositories,
        };
      })
      .then(({ user, repositories }) => {
        setState({ ...state, user, repositories });
      })
      .catch(setError)
      .then(setState(initialState));
  }

  React.useEffect(() => {
    localStorage.setItem(`state`, JSON.stringify(state));
  }, [state]);

  if (state) {
    if (state.token && !(state.user || state.repositories))
      return <FullPageSpinner />;
    else
      return (
        <AppStateContext.Provider
          value={{ state, setState, repositoryListItemClickHandler, logout }}
          {...rest}
        >
          {children}
        </AppStateContext.Provider>
      );
  } else if (error) {
    return (
      <div>
        <h1>Something has gone catastrophically wrong!</h1>
        <p>Please smash that F5!!!</p>
        <pre>{error.message}</pre>
      </div>
    );
  } else return <FullPageSpinner />;
};

export const useAppState = () => {
  const context = React.useContext(AppStateContext);
  if (context === undefined)
    throw new Error(`useAppState must be used within AppStateProvider`);
  return context;
};
