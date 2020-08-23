import React, { useEffect, useState, useContext } from 'react';
import RepoListItem from '../components/RepoListItem';
import styled from "styled-components";
import { useAppState } from '../context/app-state-context';

import RepoListContext from "../context/RepoListContext";

const StyledH4 = styled.h4`
  color: #0366d6;
`;

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
  
  const starredListAZ = starredList.slice().sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

  return (
  <div>
    { starredListAZ.length === 0
    ? null
    : <div>
      <StyledH4>Starred List</StyledH4>
      {starredListAZ.map((repository, index) =>
      RepoListItem(repository, index, state, setState, repositoryListItemClickHandler))}
      <hr className="horizontal-line"/>
      </div>
    }
  </div>
  );
};
export default StarredContainer;