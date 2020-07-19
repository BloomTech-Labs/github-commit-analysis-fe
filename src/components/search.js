import React, { useState, useContext } from 'react';

import RepoListContainer from '../components/RepoListContainer';
import StarredContainer from '../components/StarredContainer';
import RepoListContext from "../context/RepoListContext";


const RepoSearch = () => {

  const { repoList } = useContext(RepoListContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterList, setFilterList] = useState(repoList);
  const [sort, setSort] = useState("Sort");

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
      <StarredContainer repoList={repoList} />
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
      <h4>Repository List</h4>
      <RepoListContainer
        filterList={filterList}
        repoList={repoList}
        sort={sort}
      />
    </div>
  )
};
export default RepoSearch;