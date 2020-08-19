import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import AppProviders from '../context';
import {AppStateContext} from '../context/app-state-context'
import RepoListContext from '../context/RepoListContext';
import { repoTestData, state } from '../repoTestData';
import StarredContainer from './StarredContainer'

afterEach(cleanup);

function renderStarred(repoList) {
    return render(
        <AppProviders>
            <RepoListContext.Provider value={{repoList}}>
                <StarredContainer />
            </RepoListContext.Provider>
        </AppProviders>
    )
}

test('Displays StarredContainer', () => {
    const { getByText } = renderStarred(repoTestData);
    expect(getByText("Project-1-Movie-Trailer-Website")).toHaveTextContent("Project-1-Movie-Trailer-Website");
    console.log(getByText);
});