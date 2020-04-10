import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';

import AppProviders from './context';
import App from './App';

import './index.css';

if (process.env.REACT_APP_ENV !== 'production') {
  console.groupCollapsed(`App launched in ${process.env.REACT_APP_ENV} mode.`);
  console.log(`Sentry is disabled.`);
  console.groupEnd();
} else {
  Sentry.init({
    release: `${process.env.REACT_APP_NAME}@${process.env.REACT_APP_VERSION}`,
    dsn: `${process.env.REACT_APP_SENTRY_DSN}`,
  });
}

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
);
