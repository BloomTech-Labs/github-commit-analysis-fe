import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// necessary for state/token
import { useAppState } from '../context/app-state-context';

const RepoConatiner = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 100vh;
overflow: scroll;
`

const RepoSearch = () => {
  // this is where we get the token from
  const {
    state: { token },
  } = useAppState();

  const [repoList, setRepoList] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [filterList, setFilterList] = useState(repoList);

  // axios call for repos
  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/repo`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((data) => {
      setRepoList(data.data.repositories);
    })
    .catch(() => null);
  }, [token]);

  const handleChange = e => {
    setSearchTerm(e.target.value)
  };
  const handleSubmit = e => {
    e.preventDefault();
    const searchResults = repoList.filter(repo => {
      return repo.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    setFilterList(searchResults);
  };
  
  return (
    <div>
      <form
      onSubmit={handleSubmit}
      >
        <label htmlFor="repo-name">Repo Name:</label>
        <input
          id="repo-name"
          name="repo-name"
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <RepoConatiner>
        { filterList.length === 0 ?
          repoList.map(repo => {
            return <button key={repo.id}>{repo.name}</button>
          }) :
          filterList.map(repo => {
            return <button key={repo.id}>{repo.name}</button>
          })
        }
      </RepoConatiner>
    </div>
  )
};

export default RepoSearch;