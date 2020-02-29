import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { BrowserRouter as Router } from 'react-router-dom';
import { Security } from '@okta/okta-react';

import App from './App';

import './index.css';

function onAuthRequired({ history }) {
  history.push('/login');
}

if (process.env.REACT_APP_ENV !== 'production') {
  console.groupCollapsed(
    `App launched in %c[ ${process.env.REACT_APP_ENV} ]%c mode.`,
    'color: #dddddd; font-size: 12px;',
  );
  console.log(
    'SENTRY IS \n   %cDISABLED%c',
    'font-weight: bold; font-size: 24px;color: white; text-shadow: 1px 1px 1px rgb(217,31,38) , 2px 2px 2px rgb(226,91,14) , 3px 3px 3px rgb(245,221,8) , 4px 4px 4px rgb(5,148,68) , 5px 5px 5px rgb(2,135,206) , 6px 6px 6px rgb(4,77,145) , 7px 7px 7px rgb(42,21,113)',
  );
  console.groupEnd();
} else {
  Sentry.init({
    release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
    dsn: `${process.env.REACT_APP_SENTRY_DSN}`,
  });
}

ReactDOM.render(
  <Router>
    <Security
      issuer={`${process.env.REACT_APP_OKTA_ORG_URL}`}
      client_id={process.env.REACT_APP_OKTA_CLIENT_ID}
      redirectUri={window.location.origin + '/implicit/callback'}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <App />
    </Security>
  </Router>,
  document.getElementById('root'),
);
