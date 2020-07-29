import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from "../pages/About"
import AboutCard from './TeamCard';
import Heading from "./TeamCard"
import AppProviders from '../context';

it('renders', () => {
  const wrapper = rtl.render(
      <AboutCard />
  );
})

it('checks for heading component', () => {
  const getById = rtl.queryByAttribute.bind(null, 'id');
  const heading = rtl.render(<Heading />);
  const table = getById(heading.container, 'heading');
})

test("checks for bio text in About.js repeating 7 times", () => {
  const { getAllByText }   = rtl.render(<AppProviders><About /></AppProviders>);
  const result = getAllByText(/Lambda School student Currently in LabsPT11/i);
  const expected = 7;
  expect(result.length).toBe(expected);
});

test("checks if profile pics are visible", () => {
  const { getByAltText } = rtl.render(<AppProviders><AboutCard /></AppProviders>);
  const result = getByAltText(/profile pic/i);
  expect(result).toBeVisible();
  });

  test("checks if a name is there", () => {
  const { getByText } = rtl.render(<AppProviders><About /></AppProviders>);
  const result = getByText(/Loralie Flint/i);
  expect(result).toBeVisible();
  });