import React from "react";
import styled from "styled-components"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import RepoInfoCard from './RepoInfoCard';
import GraphHolder from './GraphHolder';

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
  width: 490px;
  height: 500px;
  padding: 5px;
`;

const BoardTwo = styled.div`
  flex-direction: row;
  border: 1px solid gray;
  width: 490px;
  height: 500px;
  padding: 5px;
`;

const TabNav = () => {
    return (
        <DashTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
            <DashTabList>
                <DashTab>Issues Comments</DashTab>
                <DashTab>Merge Fraction</DashTab>
                <DashTab>Code Frequency</DashTab>
            </DashTabList>
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        <h1>Panel 1</h1>
                    </BoardOne>
                    <BoardTwo>
                        <GraphHolder src="https://chart-studio.plotly.com/~npgeorge/50.embed" />
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        <h1>Panel 2</h1>
                    </BoardOne>
                    <BoardTwo>
                        <GraphHolder src="https://chart-studio.plotly.com/~npgeorge/40.embed" />
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
            <DashTabPanel>
                <BoardHolder>
                    <BoardOne>
                        <h1>Panel 3</h1>
                    </BoardOne>
                    <BoardTwo>
                        <GraphHolder src="//chart-studio.plotly.com/~npgeorge/43.embed" />
                    </BoardTwo>
                </BoardHolder>
            </DashTabPanel>
        </DashTabs>
    )
};

export default TabNav;