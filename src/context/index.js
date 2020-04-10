import React from 'react';

import { AppStateProvider } from './app-state-context';

export default ({ children }) => (
  <AppStateProvider>{children}</AppStateProvider>
);
