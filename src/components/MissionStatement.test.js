import React from 'react';
import {render, cleanup } from '@testing-library/react';
import MissionStatement from './MissionStatement';
import AppProviders from '../context';

afterEach(cleanup)

test('Mission Statement is rendered', () => {
  const { queryByText } = render(<AppProviders><MissionStatement /></AppProviders>);
  const result = queryByText(/People interact with repositories/i);
  expect(result).toBeTruthy(); 
});