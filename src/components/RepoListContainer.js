import React from "react";
import styled from "styled-components";
import RepoListItem from '../components/RepoListItem';
import { useAppState } from '../context/app-state-context';

const RepoContainer = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 100vh;
overflow: scroll;
`

const RepoListContainer = (props) => {
  const { state, setState, repositoryListItemClickHandler } = useAppState();
  return (
    <RepoContainer>
      { props.filterList.length === 0 ?
          props.repoList.map((repository, index) => 
            RepoListItem(
              repository,
              index,
              state,
              setState,
              repositoryListItemClickHandler
            )
          ) :
          props.filterList.map((repository, index) => 
          RepoListItem(
            repository,
            index,
            state,
            setState,
            repositoryListItemClickHandler
           )
          )
        }
    </RepoContainer>
  );
};

export default RepoListContainer;