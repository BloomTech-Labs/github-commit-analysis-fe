import React from "react";
import styled from "styled-components";
import ".../../font-awesome/css/font-awesome.min.css";
import RepoContainer from "../components/search";
import { useAppState } from '../context/app-state-context';
import RepoInfoCard from '../components/RepoInfoCard';
import TabNav from '../components/TabNav';

const Holder = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SideOne = styled.div`
  flex-direction: column;
  margin: 10px 0px 30px 0px;
  border-right: 1px solid #dcdcdc;
  padding-left: 2rem;
`;

const SideTwo = styled.div`
  flex-direction: column;
  margin-bottom: 30px;
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

const SearchUsers = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 80px 40px 30px 0px;
`;

const MyDashboard = () => {  
    const {
      state: { user },
    } = useAppState();

  return (
    <Holder>
      <SideOne>
        <ProfilePic src={user.avatarUrl} alt="profile pic"></ProfilePic>
        <h4>{`Name: ${user.name}`}</h4>
        <h5>{`Bio: ${user.bio}`}</h5>
        <h5>{`Location: ${user.location}`}</h5>
        <RepoContainer />
      </SideOne>
      <SideTwo>
        <SearchUsers>
          <input type="type" name="search" placeholder="Search Users" />
          <button className="UsersButton">
            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
          </button>
        </SearchUsers>
        <TabNav />
        <RepoInfoCard />
      </SideTwo>
    </Holder>
  );
};
export default MyDashboard;
