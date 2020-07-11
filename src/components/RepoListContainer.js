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
  
  const repoListAsc = repoList.slice().sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

  const filterListAsc = filterList.slice().sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

  const repoListZA = repoList.slice().sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return 1;}
    if (x > y) {return -1;}
    return 0;
  });

  const filterListZA = filterList.slice().sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return 1;}
    if (x > y) {return -1;}
    return 0;
  });

  const repoListNewest = repoList.slice().sort(function(a, b){
    var x = a.createdAt;
    var y = b.createdAt;
    if (x < y) {return 1;}
    if (x > y) {return -1;}
    return 0;
  });

  const filterListNewest = filterList.slice().sort(function(a, b){
    var x = a.createdAt;
    var y = b.createdAt;
    if (x < y) {return 1;}
    if (x > y) {return -1;}
    return 0;
  });

  const repoListOldest = repoList.slice().sort(function(a, b){
    var x = a.createdAt;
    var y = b.createdAt;
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

  const filterListOldest = filterList.slice().sort(function(a, b){
    var x = a.createdAt;
    var y = b.createdAt;
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });

  console.log('this', repoList);

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
        </div>;
      case 'newest':
        return <div>
          { filterList.length === 0 ?
          repoListNewest.map((repository, index) => 
            RepoListItem(repository, index, state, setState, repositoryListItemClickHandler)) :
          filterListNewest.map((repository, index) => 
            RepoListItem(repository, index, state, setState, repositoryListItemClickHandler))
          }
        </div>;
      case 'oldest':
        return <div>
          { filterList.length === 0 ?
          repoListOldest.map((repository, index) => 
            RepoListItem(repository, index, state, setState, repositoryListItemClickHandler)) :
          filterListOldest.map((repository, index) => 
            RepoListItem(repository, index, state, setState, repositoryListItemClickHandler))
          }
      </div>;
    };
  };
  
  return (
    <RepoContainer>
      <SwitchCase sort={sort} />
    </RepoContainer>
  );
};

export default RepoListContainer;