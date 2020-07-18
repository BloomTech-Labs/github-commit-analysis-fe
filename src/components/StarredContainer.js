import React, { useEffect, useState, useContext } from 'react';
import RepoListItem from '../components/RepoListItem';
import { useAppState } from '../context/app-state-context';

import RepoListContext from "../context/RepoListContext";

const StarredContainer = () => {
    const [ starredList, setStarredList] = useState([]);
    const [ results, setResults] = useState([]);
    const { repoList } = useContext(RepoListContext);

    useEffect(() =>  {
        setResults(repoList.filter(repo => {
        return repo.isStarred === true;
        }))
    }, [repoList]);

    useEffect(() => {
        setStarredList(results)
    }, [results]);
    
  const { state, setState, repositoryListItemClickHandler } = useAppState();
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