import React from 'react';
import {render, cleanup } from '@testing-library/react';
import RepoDetail from './RepoDetail';
import AppProviders from '../context';

afterEach(cleanup)

test('Text BorderBox is rendered', () => {
  const { queryByText } = render(<AppProviders><RepoDetail /></AppProviders>);
  const result = queryByText(/just click another repository!/i);
  expect(result).toBeTruthy(); 
});