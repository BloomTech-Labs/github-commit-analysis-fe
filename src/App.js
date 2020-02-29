import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Layout from './components/Layout';
import Login from './components/auth/Login';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path='/' component={Home} />
      <SecureRoute exact path='/dashboard' component={Dashboard} />
      <Route
        path='/login'
        render={() => <Login baseUrl='https://dev-389735.okta.com' />}
      />
      <Route path='/implicit/callback' component={ImplicitCallback} />
    </Switch>
  </Layout>
);

export default App;
