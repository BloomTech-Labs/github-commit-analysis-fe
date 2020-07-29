import React, { useContext, useState } from "react";
import axios from "axios";
import { useAppState } from '../context/app-state-context';

import RepoListContext from '../context/RepoListContext';
 
function ToggleStarred(repository) {
  const {
    state: { token }
  } = useAppState();

  const [classes, setClasses] = useState(true);

  const { refresh, setRefresh } = useContext(RepoListContext);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setClasses(!classes); 
    const update = 
      {
        "update": !repository.repository.isStarred,
        "repoId": repository.repository.id
    }
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/repo/starred`, update, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        repository.repository.isStarred = !repository.repository.isStarred;
         e.className = "notStarred";
        setRefresh(!refresh)
      })
      .catch((err) => console.log(err));      
  };
 
  return (
    <div>
      <i
        onClick={handleSubmit}
        className={
          classes ? "fa fa-star icon-xl star" : "fa fa-star icon-xl notStarred"
        }
        aria-hidden="true"
      ></i>
    </div>
  );
}
export default ToggleStarred;