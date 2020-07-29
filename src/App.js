// import React, { Suspense } from 'react';
import React, { Suspense, useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { useAppState } from './context/app-state-context';
import { Layout } from './components';
import { FullPageSpinner } from './components';

import RepoListContext from './context/RepoListContext';

const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/About'));
const MyDashboard = React.lazy(() => import('./pages/NewDashboard'));

export const App = () => {
  const { state } = useAppState();

  const [refresh, setRefresh] = useState(true);

  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    if (state.token) {
      axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/repo`, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((data) => {
        setRepoList(data.data.repositories);
      })
      .catch(() => null);
    }
  }, [state.token, refresh]);

  return (
    <RepoListContext.Provider value={{repoList, setRepoList, refresh, setRefresh}}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Suspense fallback={<FullPageSpinner />}>
              <Layout>{state.user ? <MyDashboard /> : <Home />}</Layout>
            </Suspense>
          </Route>
          <Route exact path='/about'>
            <Suspense fallback={<FullPageSpinner />}>
              <Layout>{state.user ? <MyDashboard /> : <About />}</Layout>
            </Suspense>
          </Route>
          <Route exact path='/callback' render={() => <Redirect to='/' />} />
        </Switch>
      </Router>
    </RepoListContext.Provider>
  );
};
export default App;
