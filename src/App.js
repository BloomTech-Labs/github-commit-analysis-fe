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
const About = React.lazy(() => import('./pages/About'));

const Dashboard = React.lazy(() => import('./pages/dashboard'));

export const App = () => {
  const { state } = useAppState();

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Suspense fallback={<FullPageSpinner />}>
            <Layout>{state.user ? <Dashboard /> : <Home />}</Layout>
          </Suspense>
        </Route>
        <Route exact path='/about'>
          <Suspense fallback={<FullPageSpinner />}>
            <Layout>{state.user ? <Dashboard /> : <About />}</Layout>
          </Suspense>
        </Route>
        <Route exact path='/callback' render={() => <Redirect to='/' />} />
      </Switch>
    </Router>
  );
};
export default App;
