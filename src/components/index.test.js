import React from 'react';
import {render, cleanup } from '@testing-library/react';
import { Layout } from './index';
import AppProviders from '../context';

afterEach(cleanup)

test('about link renders', () => {
  const { queryByText } = render(<AppProviders><Layout /></AppProviders>);
  const result = queryByText(/about/i);
  expect(result).toBeTruthy(); 
});

test('checks link is redirecting to correct URL', () => {
  const { getByText } = render(<AppProviders><Layout /></AppProviders>);
  const link = getByText(/about/i);
  expect(link.href).toBe("http://localhost/about");
});