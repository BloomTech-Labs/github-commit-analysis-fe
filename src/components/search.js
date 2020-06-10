import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
const RepoConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  overflow: scroll;
`;
const loginUser = "hebergonza719";
const UserRepos = () => {
  const [repoList, setRepoList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterList, setFilterList] = useState(repoList);
  const getRepos = () => {
    axios
      .get(`https://api.github.com/users/${loginUser}/repos?per_page=200`, {})
      .then((repos) => {
        setRepoList(repos.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRepos();
    const searchResults = repoList.filter((repo) => {
      return repo.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilterList(searchResults);
  }, [searchTerm]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="searchRepos">
      <form>
        <label htmlFor="repo-name"></label>
        <input
          id="repo-name"
          placeholder="Search Repos by Name"
          name="repo-name"
          type="text"
          className="searchRepo"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <RepoConatiner>
        {filterList.length === 0
          ? repoList.map((repo) => {
              return (
                <div className="repocard" key={repo.id}>
                  {repo.full_name}
                </div>
              );
            })
          : filterList.map((repo) => {
              return (
                <div className="repocard" key={repo.id}>
                  {repo.full_name}
                </div>
              );
            })}
      </RepoConatiner>
    </div>
  );
};
export default UserRepos;
