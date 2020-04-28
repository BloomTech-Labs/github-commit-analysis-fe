import React from 'react';
import { Grid } from '@primer/components';

import { useAppState } from '../context/app-state-context';
import RepoListItem from './RepoListItem';

const RepoList = () => {
  const { state, setState, repositoryListItemClickHandler } = useAppState();

  return (
    <Grid
      gridTemplateColumns='repeat(auto-fill, minmax(300px, 1fr))'
      gridGap='1rem'
      marginBottom='5rem'
    >
      {state.repositories.map((repository, index) =>
        RepoListItem(
          repository,
          index,
          state,
          setState,
          repositoryListItemClickHandler,
        ),
      )}
    </Grid>
  );
};

export default RepoList;
