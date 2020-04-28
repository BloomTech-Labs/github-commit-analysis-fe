import React from 'react';

import { useAppState } from '../context/app-state-context';

export default () => {
  const {
    state: {
      user: { avatarUrl, bio, githubUrl, location, login, name },
    },
  } = useAppState();

  return (
    <section>
      <img src={avatarUrl} alt='github avatar' />
      <h1>
        <a href={githubUrl}>{login}</a>
      </h1>
      <h2>
        {name} @ {location}
      </h2>
      <p>{bio}</p>
    </section>
  );
};
