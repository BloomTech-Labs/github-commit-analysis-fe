import React from 'react';
import { Button, ButtonOutline } from '@primer/components';

const RepoListItem = (repository, key, state, setState, clickHandler) => {
  if (state.activeItem && state.activeItem.id === repository.id)
    return (
      <Button
        key={key}
        onClick={() => clickHandler(state, setState, repository)}
      >
        {repository.name}
      </Button>
    );
  else
    return (
      <ButtonOutline
        key={key}
        onClick={() => clickHandler(state, setState, repository)}
      >
        {repository.name}
      </ButtonOutline>
    );
};

export default RepoListItem;
