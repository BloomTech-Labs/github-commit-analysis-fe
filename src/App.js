import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { useAppState } from './context/app-state-context';
import { Layout } from './components';
import { FullPageSpinner } from './components';

const Home = React.lazy(() => import('./pages/home'));
const Dashboard = React.lazy(() => import('./pages/dashboard'));

function App() {
  const { state, setState } = useAppState();

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Suspense fallback={<FullPageSpinner />}>
            <Layout>{state.user ? <Dashboard /> : <Home />}</Layout>
          </Suspense>
        </Route>
        <Route
          exact
          path='/callback'
          render={() => {
            const hash = new URL(document.location).hash;
            if (hash && hash.valueOf('jwt')) {
              const jwt = hash.valueOf('jwt').substring(5);
              localStorage.setItem('token', jwt);
              setState({ ...state, token: jwt });
            }
            return <Redirect to='/' />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
