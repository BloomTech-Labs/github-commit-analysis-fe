import React from 'react';
import {render, cleanup} from '@testing-library/react';
import Home from './home';
import AppProviders from '../context';

afterEach(cleanup)

test("checks if there is only one element with the word Repos", () => {
const { getAllByText } = render(<AppProviders><Home /></AppProviders>);
const expected = 1;
const result = getAllByText(/Repos/i);
expect(result.length).toBe(expected);
});

test("checks if Gitstats logo is visible", () => {
const { getByAltText } = render(<AppProviders><Home /></AppProviders>);
const result = getByAltText(/gitstats color logo/i);
expect(result).toBeVisible();
});

test("checks if footer is visible", () => {
const { getByText } = render(<AppProviders><Home /></AppProviders>);
const result = getByText(/@Copyright 2020/i);
expect(result).toBeVisible();
});