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
const MyDashboard = React.lazy(() => import('./pages/NewDashboard'));

export const App = () => {
  const { state } = useAppState();

  return (
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
  );
};
export default App;
