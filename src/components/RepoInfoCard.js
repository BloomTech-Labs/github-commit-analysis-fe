import React from "react";
import styled from "styled-components";
import ToggleStarred from "../components/ToggleStarred";
import { useAppState } from "../context/app-state-context";

const StyledP = styled.p`
  font-family: Helvetica;
  color: Black;
  text-align: center;
  font-size: 18px;
  font-weight: 900;
  padding: 0 3rem;
  
  @media (max-width: 1500px) {
    padding: 0;
    font-size: 14px;
  }
`;
const RepoDetailSpan = styled.div`
  font-family: Helvetica;
  color: #333333;
  text-align: center;
  font-size: 18px;
  font-weight: 900;

  @media (max-width: 1500px) {
    font-size: 14px;
  }
`;
const TitleHeading = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  font-family: Helvetica;
  color: #333333;
  margin-bottom: 1.3rem;
  margin-top: 3rem;
  text-align: center;

  @media (max-width: 1500px) {
    font-size: 2.25rem;
  }

  @media (max-width: 1375px) {
    font-size: 3rem;
  }

`;
const SubHeading = styled.h4`
  font-size: 2rem;
  font-weight: 900;
  font-family: Helvetica;
  padding-bottom: 0.5rem;
  color: Black;
  margin-top: 1rem;
  opacity: initial;
  text-align: center;
  margin-bottom: 3.5rem;

  @media (max-width: 1500px) {
    padding: 0;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: inherit;
  justify-content: center;
  margin-left: 30px;
`;

const RepoInfoCont = styled.div`
  display: flex;
  height: 96.5%;
  flex-direction: column;

  @media (max-width: 1500px) {
    height: 95.5%
  }
`;

const ColumnCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 5rem;

  @media (max-width: 1500px) {
    margin-top: 3.5rem;
  }
`;

const Column = styled.div`
  width: 40%;
  background-color: white;
  opacity: .75;
  height: 100%;
  padding: 4rem 0 1rem 0;

  @media (max-width: 1500px) {
    width: 40%;
    background-color: white;
    opacity: .75;
    height: 100%;
    padding: 2.5rem 0 0.5rem 0;
  }

`;

const DetailView = ({ repo }) => {
  return (
    <div className="repo-info-background">
      <ToggleStarred repository={repo} />
      <RepoInfoCont>
        <div>
          <TitleHeading>{repo.name}</TitleHeading>
        </div>

        <ColumnCont>
          <Column>
            <SubHeading>Description:</SubHeading>

            <StyledP>
              {repo.description ? repo.description : `No description provided`}
            </StyledP>
          </Column>

          <Column>
            <SubHeading>This repository has been:</SubHeading>

            <RepoDetailSpan>{`Forked: ${repo.forkCount || 0} times`}</RepoDetailSpan>
            <br />
            <RepoDetailSpan>{`Watched: ${repo.watchCount || 0} times`}</RepoDetailSpan>
            <br />
            <RepoDetailSpan>{`Starred: ${repo.starCount || 0} times`}</RepoDetailSpan>
          </Column>
        </ColumnCont>
      </RepoInfoCont>
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
        null
      )}
    </Container>
  );
};

export default RepoInfoCard;
