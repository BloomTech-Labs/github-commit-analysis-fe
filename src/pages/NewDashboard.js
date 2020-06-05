import React from "react";
import styled from "styled-components";
import ".../../font-awesome/css/font-awesome.min.css";
import ImageHolder from "../img/DashboardPlaceholder.jpg";


const Holder = styled.div`
  display: flex;
  justify-content: center;
`;

const SideOne = styled.div`
  flex-direction: column;
  margin: 10px 0px 30px 0px;
  border-right: 1px solid #DCDCDC;
  // padding-right: 5px;

`;

const SideTwo = styled.div`
  flex-direction: column;
  margin-bottom: 30px;

`;

const RepoCard = styled.div`
  border-bottom: 2px solid #DCDCDC;
  margin: 10px 0px 10px 0px;
  padding: 1%;
  height: auto;
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

const SearchRepos = styled.div`
display: flex;
flex-direction: row;
margin: 20px 1px 10px 0px;
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
`

const Toggle = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
Font-weight: bold;
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
`

const BoardHolder = styled.div`
margin: 50px 40px 100px 30px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
border: 2px solid gray;
max-width: 99%;
`
const BoardOne = styled.div`
border: 1px solid gray;
flex-direction: row;
width: 490px;
height: 500px;
padding: 5px;
`

const BoardTwo = styled.div`
flex-direction: row;
border: 1px solid gray;
width: 490px;
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
            id="input"
            type="text"
            name="search"
            placeholder="Search Repos"
          />
          <button id="buttons">
            <i className="fa fa-search fa-lg" aria-hidden="true"></i>
          </button>
        </SearchRepos>
        <div>
          <RepoCard className="repoCard">
            <p>repo 1</p>
            <p># of commits</p>
          </RepoCard>
          <RepoCard className="repoCard">
            <p>repo 1</p>
            <p># of commits</p>
          </RepoCard>
          <RepoCard className="repoCard">
            <p>repo 1</p>
            <p># of commits</p>
          </RepoCard>
          <RepoCard className="repoCard">
            <p>repo 1</p>
            <p># of commits</p>
          </RepoCard>
          <RepoCard className="repoCard">
            <p>repo 1</p>
            <p># of commits</p>
          </RepoCard>
        </div>
      </SideOne>
      <SideTwo>
        <SearchUsers>
          <input
            type="type"
            name="search"
            placeholder="Search Users"
           />
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
