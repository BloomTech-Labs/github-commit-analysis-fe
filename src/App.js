import React, { Suspense } from 'react';

import { useUser } from './context/user-context.js';
import { Layout } from './components';

const Home = React.lazy(() => import('./pages/home'));
const Dashboard = React.lazy(() => import('./pages/dashboard'));

function App() {
  const user = useUser();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout user={user}>{user ? <Dashboard /> : <Home />}</Layout>
    </Suspense>
  );
}

export default App;
