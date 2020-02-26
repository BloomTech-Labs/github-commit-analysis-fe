import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Layout from './components/Layout';
import Home from './pages/home';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
