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

const RepoListContainer = ({ filterList, repoList, sort }) => {
  const { state, setState, repositoryListItemClickHandler } = useAppState();
  
  const repoListAsc = repoList.slice();

  repoListAsc.sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

  const filterListAsc = filterList.slice();

  filterListAsc.sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

  const repoListZA = repoList.slice();

  repoListZA.sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return 1;}
    if (x > y) {return -1;}
    return 0;
  });

  const filterListZA = filterList.slice();

  filterListZA.sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

  function SwitchCase({ sort }) {
    switch(sort) {
      default:
        return <div>
          { filterList.length === 0 ?
          repoList.map((repository, index) => 
            RepoListItem(repository, index, state, setState, repositoryListItemClickHandler)) :
          filterList.map((repository, index) => 
            RepoListItem(repository, index, state, setState, repositoryListItemClickHandler))
          }
        </div>;
      case 'AZ':
        return <div>
          { filterList.length === 0 ?
          repoListAsc.map((repository, index) => 
            RepoListItem(repository, index, state, setState, repositoryListItemClickHandler)) :
          filterListAsc.map((repository, index) => 
            RepoListItem(repository, index, state, setState, repositoryListItemClickHandler))
          }
        </div>;
      case 'ZA':
        return <div>
          { filterList.length === 0 ?
          repoListZA.map((repository, index) => 
            RepoListItem(repository, index, state, setState, repositoryListItemClickHandler)) :
          filterListZA.map((repository, index) => 
            RepoListItem(repository, index, state, setState, repositoryListItemClickHandler))
          }
        </div>;;
      case 'newest':
        return 'newest';
      case 'oldest':
        return 'oldest';
      case 'favorite':
        return 'favorite';
    };
  };
  
  return (
    <RepoContainer>
      {/* { filterList.length === 0 ?
          repoList.map((repository, index) => 
            RepoListItem(
              repository,
              index,
              state,
              setState,
              repositoryListItemClickHandler
            )
          ) :
          filterList.map((repository, index) => 
          RepoListItem(
            repository,
            index,
            state,
            setState,
            repositoryListItemClickHandler
           )
          )
        } */}
        
      <SwitchCase sort={sort} />
    </RepoContainer>
  );
};

export default RepoListContainer;