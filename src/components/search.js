
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppState } from '../context/app-state-context';

import RepoListContainer from '../components/RepoListContainer';

const RepoSearch = () => {
  const {
    state: { token },
  } = useAppState();

  const [repoList, setRepoList] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [filterList, setFilterList] = useState(repoList);
  const [sort, setSort] = useState("Sort");
  
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

  const handleDropdown = e => {
    setSort(e.target.value);
  };
  
  return (
    <div>
      <form
      onSubmit={handleSubmit}
      >
        <label htmlFor="repo-name"></label>
        <input
          placeholder="search my repos"
          id="repo-name"
          name="repo-name"
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <select value={sort} onChange={handleDropdown}>
        <option value="Sort" disabled>Sort</option>
        <option value="AZ">A-Z</option>
        <option value="ZA">Z-A</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>
      <RepoListContainer 
        filterList={filterList}
        repoList={repoList}
        sort={sort}
      />
    </div>
  )
};
export default RepoSearch;