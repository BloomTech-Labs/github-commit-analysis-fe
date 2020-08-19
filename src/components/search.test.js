import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import AppProviders from '../context';
import {AppStateContext} from '../context/app-state-context'
import RepoListContext from '../context/RepoListContext';
import { repoTestData, state } from '../repoTestData';
import RepoContainer from './search';

afterEach(cleanup);

function renderSearch(repoList) {
    return render(
        <AppProviders>
            <RepoListContext.Provider value={{repoList}}>
                <RepoContainer />
            </RepoListContext.Provider>
        </AppProviders>
    )
}

test('Displays Search', () => {
    const { getByText } = renderSearch(repoTestData);
    expect(getByText("Sort")).toHaveTextContent("Sort");
    console.log(getByText);
});