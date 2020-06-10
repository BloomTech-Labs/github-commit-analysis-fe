import React from "react";
import styled from "styled-components";
import ".../../font-awesome/css/font-awesome.min.css";
import UserRepos from "../components/search";
import { useAppState } from '../context/app-state-context';

const Holder = styled.div`
  display: flex;
  justify-content: center;
`;

const SideOne = styled.div`
  flex-direction: column;
  margin: 10px 0px 30px 0px;
  border-right: 1px solid #dcdcdc;
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
  margin: 80px 40px 0px 0px;
`;

const ToggleHolder = styled.div`
  display: flex;
  flex-direction: row;
  margin: 60px 65px 10px 0px;
`;

const Toggle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-weight: bold;
  color: #0a9aec;
  width: 150px;
  margin: 10px 60px 10px 100px;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  border: 2px solid #0a9aec;
  transition: transform 2s;
  &:hover {
    background-color: #0a9aec;
    color: white;
    width: 155px;
    height: auto;
  }
`;

const BoardHolder = styled.div`
  margin: 50px 40px 100px 30px;
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
        <UserRepos />
      </SideOne>
      <SideTwo>
        <SearchUsers>
          <input type="type" name="search" placeholder="Search Users" />
          <button className="UsersButton">
            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
          </button>
        </SearchUsers>
        <ToggleHolder>
          <Toggle>Slider 1</Toggle>
          <Toggle>Slider 2</Toggle>
          <Toggle>Slider 3</Toggle>
        </ToggleHolder>
        <BoardHolder>
          <BoardOne>
            <h6>box one</h6>
          </BoardOne>
          <BoardTwo>
            <h6>box two</h6>
          </BoardTwo>
        </BoardHolder>
      </SideTwo>
    </Holder>
  );
};
export default MyDashboard;
