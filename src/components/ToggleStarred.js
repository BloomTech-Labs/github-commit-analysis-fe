import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAppState } from '../context/app-state-context';

import RepoListContext from '../context/RepoListContext';
 
function ToggleStarred(repository) {
  const {
    state: { activeItem, token }
  } = useAppState();

  const [classes, setClasses] = useState(null);

  const { refresh, setRefresh } = useContext(RepoListContext);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
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
        setRefresh(!refresh);
        setClasses(!classes); 
      })
      .catch((err) => console.log(err));      
  };

  useEffect(() => {
    setClasses(repository.repository.isStarred);
  }, [activeItem, repository.repository.isStarred]);
 
  return (
    <div className="star-position">
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