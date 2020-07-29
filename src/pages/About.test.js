import React from 'react';
import * as rtl from '@testing-library/react';
import About from './About';
import AppProviders from '../context';
// import TeamCard from '../components/TeamCard';

afterEach(rtl.cleanup)

test("checks for bio text in About.js repeating 7 times", () => {
  const { getAllByText } = rtl.render(<AppProviders><About /></AppProviders>);
  const result = getAllByText(/Lambda School student Currently in LabsPT11/i);
  const expected = 7;
  expect(result.length).toBe(expected);
});