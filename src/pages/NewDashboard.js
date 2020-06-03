import React from "react";
import styled from "styled-components";
import ".../../font-awesome/css/font-awesome.min.css";
import ImageHolder from "../img/DashboardPlaceholder.jpg";


const Holder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:  auto;
`;

const SideOne = styled.div`
  flex-direction: column;
  margin: 10px 0px 30px 20px;
`;

const SideTwo = styled.div`
  flex-direction: column;
  margin-bottom: 30px;
`;

const RepoCard = styled.div`
  border: 1px solid black;
  margin: 10px 0px 10px 0px;
  padding: 1%;
  height: auto;
`;

const ProfilePic = styled.img`
margin: 80px 0px 10px 30px;
  width: 120px;
  height: 100px;
`;

const SearchRepos = styled.div`
display: flex;
flex-direction: row;
margin: 20px 0px 10px 0px;
`;

const SearchUsers = styled.div`
display: flex;
justify-content: flex-end;
margin: 80px 0px 0px 0px;
`;

const ToggleHolder = styled.div`
display: flex;
flex-direction: row;
margin: 10px 65px 10px 0px
`

const Toggle = styled.div`
flex-direction: row;
Font-weight: bold;
color: black;
width: 150px;
background-color: gray;
margin: 10px 60px 10px 100px
`
const BoardHolder = styled.div`
margin: 10px 0px 300px 0px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
`

const BoardOne = styled.div`
border: 1px solid gray;
flex-direction: row;
width: 330px;
height: 500px;
margin: 10px 30px 30px 30px;
padding: 5px;
`

const BoardTwo = styled.div`
flex-direction: row;
border: 1px solid gray;
width: 330px;
margin: 10px 0px 30px 30px;
height: 500px;
padding: 5px;
`

const MyDashboard = () => {
 // make sure to import axios or install if needed
    // axios.get("/something", (req, res, next) {
    //   .then(res => {
    //     console.log(res)
    //   })
    // .catch(error => {
    //   console.log(error)
    // })
    // })

  return (
   
    <Holder>
      <SideOne>
        <ProfilePic src={ImageHolder} alt="profile pic"></ProfilePic>
        <SearchRepos>
          <input
            type="text"
            name="search"
            placeholder="Search Repos"
          ></input>
          <button className="RepoButton">
            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
          </button>
        </SearchRepos>
        <div>
          <RepoCard>
            <p>repo 1</p>
            <p># of commits</p>
          </RepoCard>
          <RepoCard>
            <p>repo 1</p>
            <p># of commits</p>
          </RepoCard>
          <RepoCard>
            <p>repo 1</p>
            <p># of commits</p>
          </RepoCard>
          <RepoCard>
            <p>repo 1</p>
            <p># of commits</p>
          </RepoCard>
          <RepoCard>
            <p>repo 1</p>
            <p># of commits</p>
          </RepoCard>
        </div>
      </SideOne>
      <SideTwo>
        <SearchUsers>
          <input
            type="text"
            name="search"
            placeholder="Search Users">
            </input>
            <button className="UsersButton">
              <i class="fa fa-search fa-lg" aria-hidden="true"></i>
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
          <BoardTwo><h6>box two</h6></BoardTwo>
        </BoardHolder>
      </SideTwo>
    </Holder>
  );
};
export default MyDashboard;
