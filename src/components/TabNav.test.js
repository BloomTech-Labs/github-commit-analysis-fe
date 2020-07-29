import React from 'react';
import {render, cleanup } from '@testing-library/react';
import TabNav from './TabNav';
import AppProviders from '../context';

afterEach(cleanup)

test('Issues Comments tab link is rendered', () => {
  const { queryByText } = render(<AppProviders><TabNav /></AppProviders>);
  const result = queryByText(/Issues Comments/i);
  expect(result).toBeVisible(); 
});

test('Issues Comments misspelled to be falsy', () => {
  const { queryByText } = render(<AppProviders><TabNav /></AppProviders>);
  const result = queryByText(/Issues Commentsa/i);
  expect(result).toBeFalsy(); 
});

test('Merge Fraction tab link is rendered', () => {
  const { queryByText } = render(<AppProviders><TabNav /></AppProviders>);
  const result = queryByText(/Merge Fraction/i);
  expect(result).toBeVisible(); 
});

test('Code Frequency tab link is rendered', () => {
  const { queryByText } = render(<AppProviders><TabNav /></AppProviders>);
  const result = queryByText(/Code Frequency/i);
  expect(result).toBeVisible(); 
});