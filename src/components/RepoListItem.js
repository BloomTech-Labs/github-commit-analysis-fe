import React from 'react';

const RepoListItem = (repository, key, state, setState, clickHandler) => {
  if (state.activeItem && state.activeItem.id === repository.id)
    return (
      <div
        className="repocard"
        key={key}
        onClick={() => clickHandler(state, setState, repository)}
      >
        {repository.name}
      </div>
    );
  else
    return (
      <div
        className="repocard"
        key={key}
        onClick={() => clickHandler(state, setState, repository)}
      >
        {repository.name}
      </div>
    );
};

export default RepoListItem;
