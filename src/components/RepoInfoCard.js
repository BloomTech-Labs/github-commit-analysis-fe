import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ToggleStarred from "../components/ToggleStarred";
import { useAppState } from "../context/app-state-context";

const StyledP = styled.p`
  font-family: Helvetica;
  color: #333333;
`;
const RepoDetailSpan = styled.span`
  font-family: Helvetica;
  color: #333333;
`;
const TitleHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  font-family: Helvetica;
  color: #333333;
`;
const SubHeading = styled.h4`
  font-size: 1rem;
  font-weight: 900;
  font-family: Helvetica;
  padding-bottom: 0.5rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: inherit;
  justify-content: center;
  margin-left: 30px;
`;
 
const repoData = (repo, token) => {
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/repo/${repo.name}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((data) => data)
    .catch(() => null);
};
 
const DetailView = ({ repo, token }) => {

  const [data, setData] = useState({})
  
  useEffect(() => {
    let data = repoData(repo, token) || null;
    setData(data);
  }, []);
 
  return (
    <div>
      <div>
        <ToggleStarred repository={repo} />
        <TitleHeading>{repo.name}</TitleHeading>
      </div>
      {data ? (
        <p>when available, sentiment analysis goes here</p>
      ) : (
        <div>
          <SubHeading>Sentiment Analysis / PR Statistics:</SubHeading>
 
          <StyledP>
            No advanced information available at this moment. Keep growing your
            repo. With more activity there's more information to gather so that
            we can provide you with meaningful feedback!
          </StyledP>
        </div>
      )}
      <div>
        <SubHeading>Description:</SubHeading>
 
        <StyledP>
          {repo.description ? repo.description : `No description provided`}
        </StyledP>
      </div>
 
      <SubHeading>This repository has been:</SubHeading>
 
      <RepoDetailSpan>{`Forked: ${repo.forkCount || 0} times`}</RepoDetailSpan>
      <br />
      <RepoDetailSpan>
        {`Watched: ${repo.watchCount || 0} times`}
      </RepoDetailSpan>
      <br />
      <RepoDetailSpan>{`Starred: ${repo.starCount || 0} times`}</RepoDetailSpan>
    </div>
  );
};
 
const RepoInfoCard = () => {
  const {
    state: { activeItem, token },
  } = useAppState();
 
  return (
    <Container>
      {activeItem ? (
        <DetailView repo={activeItem} token={token} />
      ) : (
        <StyledP>
          Repository details will be populated in here. Click a repo once to
          populate it's information and click it again to depopulate it. Or,
          just click another repository!
        </StyledP>
      )}
    </Container>
  );
};
 
export default RepoInfoCard;