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
    justify-content: space-between;
    list-style-type: none;
    padding: 0 30px;
    margin: 0;
`;
DashTabList.tabsRole = 'TabList';

const DashTab = styled(Tab)`
    font-weight: 600;
    margin-top: 7.5rem;
    font-size: 1.5rem;
    color: #0A9AEC;
    line-height: 1.8rem;
    :hover {
        color: black;
    }
    &.is-selected {
        color: black;
        padding-bottom: 1rem;
        border-bottom: 2px solid black;
    }
    @media (max-width: 1700px) {
				margin-top: 6.25rem;
        font-size: 1.25rem;
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
	margin: 20px 30px 20px 30px;
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
`;

const BoardTwo = styled.div`
  border: 1px solid gray;
  width: 50%;
  height: 50vh;
  padding: 5px;
`;

const TitleHeading = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  font-family: Helvetica;
  color: #333333;
  margin-bottom: 1.3rem;
  padding-left: 30px;
  margin-top: 2.5rem;
  
  @media (max-width: 1700px) {
		font-size: 1.25rem;
		margin-top: .75rem;
		margin-bottom: 1rem;
  }
`;

const SubHeading = styled.h4`
  font-size: 1rem;
  font-weight: 900;
  font-family: Helvetica;
  padding-bottom: 0.5rem;
  color: #0a9aec;
  margin-top: 1rem;
  padding-left: 30px;
`;

const StyledP = styled.p`
  padding-left: 30px;
`;

const RepoMessage = () => {
    return (
			<div className="repo-message">
        <h4>Please select a repository from your list.</h4>
				<br/>
				<h4>Click a repo once to populate it's information and click it again to depopulate it.</h4>
			</div>
    );
};

const TabNav = () => {
    const {
        state: { user, activeItem},
      } = useAppState();

    return (
        <DashTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
            <DashTabList>
                <DashTab data-testid="tabNavTest">Yearly <br/> Commit Activity</DashTab>
                <DashTab>Yearly Code <br/> Frequency</DashTab>
                <DashTab>All-Time <br/> Contributors</DashTab>
                <DashTab>Daily <br/> Commits</DashTab>
                <DashTab>Issue <br/> Activity</DashTab>
                <DashTab>Issue <br/> Comments</DashTab>
            </DashTabList>
            {/* number 1 */}
            <TitleHeading>Graph Description</TitleHeading>
            <DashTabPanel>
                <SubHeading>Yearly Commit Activity</SubHeading>
                <StyledP className="yearlyCommitActivity">
                    Returns total commits made each week for the last 12 months for the
                    requested repository.
                </StyledP>
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
                <SubHeading>Yearly Code Frequency</SubHeading>
                <StyledP className="yearlyCodeFrequencyAdd">
                    Returns total additions made each month for the last 12 months for the
                    requested repository.
                </StyledP>
                <StyledP className="yearlyCodeFrequencyDelete">
                    Returns total deletions made each month for the last 12 months for the
                    requested repository.
                </StyledP>
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
                <SubHeading>Top 10 All-Time Contributors</SubHeading>
                <StyledP className="allTimeContributors">
                    Returns the top 10 all-time contributors along with their total commits
                    and follower count for the requested repository.
                </StyledP>
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
                <SubHeading>Daily Commits</SubHeading>
                <StyledP className="DailyCommits">
                    Returns daily commits over the last week for the requested repository.
                </StyledP>
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
                <SubHeading>Issue Activity</SubHeading>
                <StyledP className="IssueActivityOpen">
                    Returns daily count of opened issues over the last 30 days
                    for the requested repository.
                </StyledP>
                <StyledP className="IssueActivityClosed">
                    Returns daily count of closed issues over the last 30 days
                    for the requested repository.
                </StyledP>
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
                <SubHeading>Issue Comments</SubHeading>
                <StyledP className="IssueComments">
                    Returns all issues, their comment count, and body length for the last 7
                    days for the requested repository.
                </StyledP>
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