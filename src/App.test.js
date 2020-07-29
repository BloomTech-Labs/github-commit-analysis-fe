import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import AppProviders from './context';

it('renders', () => {
  const wrapper = rtl.render(
    <AppProviders>
      <App />
    </AppProviders>
  );
});