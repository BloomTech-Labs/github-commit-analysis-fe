import React from 'react';

import { useAppState } from '../context/app-state-context';
import UserCard from '../components/UserCard';
import RepoList from '../components/RepoList';
import RepoDetail from '../components/RepoDetail';


export default () => {
  const {
    state: { user },
  } = useAppState();

  return (
    <React.Fragment>
      <UserCard user={user} />
      <RepoDetail className='detail' />
      <RepoList className='list' />
    </React.Fragment>
  );
};
