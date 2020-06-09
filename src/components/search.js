// UserRepos.js - this search function has a button
// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// const RepoConatiner = styled.div`
// display: flex;
// flex-direction: column;
// width: 300px;
// height: 100vh;
// overflow: scroll;
// `
// const loginUser = "hebergonza719"
// const UserRepos = () => {
//   const [repoList, setRepoList] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterList, setFilterList] = useState(repoList)
//   const getRepos = () => {
//     axios
//       .get(`https://api.github.com/users/${loginUser}/repos?per_page=200`, {
//         })
//       .then(repos => {
//         setRepoList(repos.data);
//       })
//       .catch(err => {
//         console.log(err)
//       });
//   };
//   useEffect(() => {
//     getRepos();
//   }, []);
//   const handleChange = e => {
//     setSearchTerm(e.target.value)
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     const searchResults = repoList.filter(repo => {
//       return repo.name.toLowerCase().includes(searchTerm.toLowerCase());
//     })
//     setFilterList(searchResults);
//   };
//   return (
//     <div>
//       <form
//       onSubmit={handleSubmit}
//       >
//         <label htmlFor="repo-name">Repo Name:</label>
//         <input
//           id="repo-name"
//           name="repo-name"
//           type="text"
//           value={searchTerm}
//           onChange={handleChange}
//         />
//         <button>Search</button>
//       </form>
//       <RepoConatiner>
//         { filterList.length === 0 ?
//           repoList.map(repo => {
//             return <button key={repo.id}>{repo.full_name}</button>
//           }) :
//           filterList.map(repo => {
//             return <button key={repo.id}>{repo.full_name}</button>
//           })
//         }
//       </RepoConatiner>
//     </div>
//   );
// };
// export default UserRepos;



// UserRepos1.js - this search function has a live search function
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const RepoConatiner = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 100vh;
overflow: scroll;
`
const loginUser = "hebergonza719"
const UserRepos = () => {
  const [repoList, setRepoList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterList, setFilterList] = useState(repoList)
  const getRepos = () => {
    axios
      .get(`https://api.github.com/users/${loginUser}/repos?per_page=200`, {
        })
      .then(repos => {
        setRepoList(repos.data);
      })
      .catch(err => {
        console.log(err)
      });
  };
  useEffect(() => {
    getRepos();
    const searchResults = repoList.filter(repo => {
      return repo.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    setFilterList(searchResults);
  }, [searchTerm]);
  const handleChange = e => {
    setSearchTerm(e.target.value)
  };
  return (
    <div className="searchRepos">
      <form>
        <label htmlFor="repo-name">Repo Name:</label>
        <input
          id="repo-name"
          name="repo-name"
          type="text"
          className="searchRepo"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <RepoConatiner>
      { filterList.length === 0 ?
          repoList.map(repo => {
            return <div className="repocard">{repo.full_name} <button  key={repo.id}></button></div>
          }) :
          filterList.map(repo => {
            return <div className="repocard">{repo.full_name} <button  key={repo.id}></button> </div>
          })
        }
      </RepoConatiner>
    </div>
  );
};
export default UserRepos;