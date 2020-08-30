import React, { useContext } from "react";
import styled from "styled-components";
import ".../../font-awesome/css/font-awesome.min.css";
import RepoContainer from "../components/search";
import { useAppState } from '../context/app-state-context';
import RepoInfoCard from '../components/RepoInfoCard';
import TabNav from '../components/TabNav';

import RepoListContext from "../context/RepoListContext";

const Holder = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SideOne = styled.div`
  flex-direction: column;
  margin: 10px 0px 0px 0px;
  border-right: 1px solid #dcdcdc;
  padding-left: 2rem;
  width: 300px;
`;

const SideTwo = styled.div`
  flex-direction: column;
  width: 90%;
`;

const ProfilePic = styled.img`
  margin: 80px 0px 10px 30px;
  width: 200px;
  height: auto;
  transition: transform 2s;
  &:hover {
    width: 215px;
    height: auto;
  }
`;

const MyDashboard = () => {  
  const {
    state: { user },
  } = useAppState();

  const { repoList } = useContext(RepoListContext);

  return (
    <Holder>
      <SideOne>
        <ProfilePic src={user.avatarUrl} alt="profile pic"></ProfilePic>
        <h4 className="main-text-color">{`Name: ${user.name}`}</h4>
        <h5 className="main-text-color">{`Bio: ${user.bio}`}</h5>
        <h5 className="main-text-color">{`Location: ${user.location}`}</h5>
        <hr className="horizontal-line"/>
        <RepoContainer repoList={repoList} />
      </SideOne>
      <SideTwo>
        <TabNav />
        <RepoInfoCard />
      </SideTwo>
    </Holder>
  );
};
export default MyDashboard;
