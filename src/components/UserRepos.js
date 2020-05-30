import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const RepoConatiner = styled.div`
display: flex;
flex-direction: column;
`


const UserRepos = () => {
  const [repoList, setRepoList] = useState([]);

  const getRepos = () => {
    axios
      .get('https://api.github.com/users/hebergonza719/repos', {
        })
      .then(repos => {
        setRepoList(repos.data);
      })
      .catch(err => {
        console.log(err)
      });
  };

  useEffect(() => {
    getRepos()
  }, [])

  console.log(repoList)


  return (
    <div>
      <RepoConatiner>
        {repoList.map(repo => {
          return <button key={repo.id}>{repo.full_name}</button>
        })}
      </RepoConatiner>
    </div>
  );
};

export default UserRepos;