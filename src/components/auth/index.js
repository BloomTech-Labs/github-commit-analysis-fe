import { useState, useEffect } from 'react';

export const useAuth = (auth) => {
  const [authenticated, setAuthenticated] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.isAuthenticated().then((isAuthenticated) => {
      if (isAuthenticated !== authenticated) setAuthenticated(isAuthenticated);
    });
  });

  useEffect(() => {
    if (authenticated) {
      auth.getUser().then((user) => setUser(user));
    } else {
      setUser(null);
    }
  }, [authenticated, auth]);

  return [authenticated, user];
};
