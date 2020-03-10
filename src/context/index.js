import React from 'react';

import { AuthProvider } from './auth-context';
import { UserProvider } from './user-context';

export default ({ children }) => (
  <AuthProvider>
    <UserProvider>{children}</UserProvider>
  </AuthProvider>
);
