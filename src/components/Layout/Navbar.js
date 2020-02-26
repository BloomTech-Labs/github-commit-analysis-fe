import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <nav className='navbar'>
    <h1>GitStats</h1>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
    </ul>
  </nav>
);
