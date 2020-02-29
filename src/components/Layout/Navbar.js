import React from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import { useAuth } from '../auth';

const Navbar = withAuth(({ auth }) => {
  const [authenticated, user] = useAuth(auth);
  console.log(`User: `, user);

  return (
    <header className='navbar'>
      <h6>GitStats</h6>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li>
            {authenticated !== null && (
              <button
                onClick={() => {
                  authenticated ? auth.logout() : auth.login();
                }}
              >
                Log {authenticated ? `out` : `in`}
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
});

export default Navbar;
