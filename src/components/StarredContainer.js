import React from 'react';

import RepoListItem from '../components/RepoListItem';
import { useAppState } from '../context/app-state-context';


const StarredContainer = ({ repoList }) => {
  const { state, setState, repositoryListItemClickHandler } = useAppState();

  const starredList = repoList.filter(repo => {
    return repo.isStarred === true;
  })

  return (
  <div>
    { starredList.length === 0 
    ? null 
    : <div>
      <h4>Starred List</h4>
      {starredList.map((repository, index) => 
      RepoListItem(repository, index, state, setState, repositoryListItemClickHandler))}
      </div>
    }
  </div>
  );
};

export default StarredContainer;