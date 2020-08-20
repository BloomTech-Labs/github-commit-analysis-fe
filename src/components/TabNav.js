import React from "react";
import styled from "styled-components"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import Top10ContributorsPlot from './plotly/Top10ContributorsPlot';
import YearlyCodeFrequency from './plotly/YearlyCodeFrequency';
import YearlyCommitActivityPlot from './plotly/YearlyCommitActivityPlot';
import { useAppState } from '../context/app-state-context';
import DailyCommitsPlot from './plotly/DailyCommitsPlot';
import IssueActivityPlot from './plotly/IssueActivityPlot';
import IssueCommentsPlot from './plotly/IssueCommentsPlot';

const DashTabs = styled(Tabs)`
`;

const DashTabList = styled(TabList)`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
`;
DashTabList.tabsRole = 'TabList';

const DashTab = styled(Tab)`
    font-size: 1.5rem;
    color: #0A9AEC;
    
    :hover {
        color: black;
    }

    &.is-selected {
        color: black;
        padding-bottom: 2rem;
        border-bottom: 2px solid black;
    }
`;

DashTab.tabsRole = 'Tab';

const DashTabPanel = styled(TabPanel)`
    &.is-selected {
        display: block;
    }
`
DashTabPanel.tabsRole = 'TabPanel';

const BoardHolder = styled.div`
  margin: 50px 40px 20px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 2px solid gray;
  max-width: 99%;
`;
const BoardOne = styled.div`
  border: 1px solid gray;
  width: 50%;
  height: 50vh;
  padding: 5px;
  display: flex;
  justify-content: center;
	align-items: center;
`;

const BoardTwo = styled.div`
  border: 1px solid gray;
  width: 50%;
  height: 50vh;
  padding: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const RepoMessage = () => {
    return (
        <h4>Please select a repository from your list</h4>
    );
};

const TabNav = () => {
    const {
        state: { user, activeItem},
      } = useAppState();

    return (
        <DashTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
            <DashTabList>
                <DashTab data-testid="tabNavTest">Yearly Commit Activity</DashTab>
                <DashTab>Yearly Code Frequency</DashTab>
                <DashTab>Top 10 All-Time Contributors</DashTab>
                <DashTab>Daily Commits</DashTab>
                <DashTab>Issue Activity</DashTab>
                <DashTab>Issue Comments</DashTab>
            </DashTabList>
            {/* number 1 */}
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        {activeItem ? <YearlyCommitActivityPlot username={user.login} repoName={activeItem.name} /> : <RepoMessage />}
                    </BoardOne>
                    <BoardTwo>
                        <YearlyCommitActivityPlot username="kubernetes" repoName="kubernetes"/>
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
            {/* number 2 */}
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        {activeItem ? <YearlyCodeFrequency username={user.login} repoName={activeItem.name} /> : <RepoMessage />} 
                    </BoardOne>
                    <BoardTwo>
                        <YearlyCodeFrequency username="kubernetes" repoName="kubernetes" />
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
            {/* number 3 */}
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        {activeItem ? <Top10ContributorsPlot username={user.login} repoName={activeItem.name} /> : <RepoMessage />} 
                    </BoardOne>
                    <BoardTwo>
                        <Top10ContributorsPlot username="kubernetes" repoName="kubernetes" />
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
            {/* number 4 */}
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        {activeItem ? <DailyCommitsPlot username={user.login} repoName={activeItem.name} /> : <RepoMessage />}
                    </BoardOne>
                    <BoardTwo>
                        <DailyCommitsPlot username="kubernetes" repoName="kubernetes"/>
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
            {/* number 5 */}
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        {activeItem ? <IssueActivityPlot username={user.login} repoName={activeItem.name} /> : <RepoMessage />}
                    </BoardOne>
                    <BoardTwo>
                        <IssueActivityPlot username="kubernetes" repoName="kubernetes"/>
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
            {/* number 6 */}
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        {activeItem ? <IssueCommentsPlot username={user.login} repoName={activeItem.name} /> : <RepoMessage />}
                    </BoardOne>
                    <BoardTwo>
                        <IssueCommentsPlot username="kubernetes" repoName="kubernetes"/>
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
        </DashTabs>
    )
};

export default TabNav;