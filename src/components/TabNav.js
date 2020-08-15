import React from "react";
import styled from "styled-components"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
// import GraphHolder from './GraphHolder';
import Top10ContributorsPlot from './plotly/Top10ContributorsPlot';
import YearlyCodeFrequency from './plotly/YearlyCodeFrequency';
import YearlyCommitActivityPlot from './plotly/YearlyCommitActivityPlot';
import { useAppState } from '../context/app-state-context';

const DashTabs = styled(Tabs)`
`;

const DashTabList = styled(TabList)`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
`;
DashTabList.tabsRole = 'TabList';

const DashTab = styled(Tab)`
    font-size: 2rem;
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
  flex-direction: row;
  width: 48%;
  height: 50vh;
  padding: 5px;
`;

const BoardTwo = styled.div`
  flex-direction: row;
  border: 1px solid gray;
  width: 48%;
  height: 50vh;
  padding: 5px;
`;

const TabNav = () => {
    const {
        state: { user, activeItem},
      } = useAppState();
    return (
        <DashTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
            <DashTabList>
                <DashTab>Top 10 All-Time Contributors</DashTab>
                <DashTab>Yearly Code Frequency</DashTab>
                <DashTab>Yearly Commit Activity</DashTab>
            </DashTabList>
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        {activeItem ? <Top10ContributorsPlot username={user.login} repoName={activeItem.name} /> : <div>Please select a repository from your list</div>} 
                    </BoardOne>
                    <BoardTwo>
                        <Top10ContributorsPlot username="kubernetes" repoName="kubernetes" />
                        {/* <GraphHolder src="https://chart-studio.plotly.com/~npgeorge/50.embed" /> */}
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        {activeItem ? <YearlyCodeFrequency username={user.login} repoName={activeItem.name} /> : <div>Please select a repository from your list</div>} 
                    </BoardOne>
                    <BoardTwo>
                        <YearlyCodeFrequency username="kubernetes" repoName="kubernetes" />
                        {/* <GraphHolder src="https://chart-studio.plotly.com/~npgeorge/40.embed" /> */}
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        {activeItem ? <YearlyCommitActivityPlot username={user.login} repoName={activeItem.name} /> : <div>Please select a repository from your list</div>}
                    </BoardOne>
                    <BoardTwo>
                        <YearlyCommitActivityPlot username="kubernetes" repoName="kubernetes"/>
                        {/* <GraphHolder src="//chart-studio.plotly.com/~npgeorge/43.embed" /> */}
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
        </DashTabs>
    )
};

export default TabNav;