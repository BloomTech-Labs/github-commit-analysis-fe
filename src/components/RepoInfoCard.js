import React from "react";
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
  margin-bottom: 1.3rem;
`;
const SubHeading = styled.h4`
  font-size: 1rem;
  font-weight: 900;
  font-family: Helvetica;
  padding-bottom: 0.5rem;
  color: #0a9aec;
  margin-top: 1rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: inherit;
  justify-content: center;
  margin-left: 30px;
`;

const DetailView = ({ repo, token }) => {
  // const [data, setData] = useState({})

  // useEffect(() => {
  //   let data = repoData(repo, token) || null;
  //   setData(data);
  // }, [repo, token]);

  return (
    <div>
      <div>
        <ToggleStarred repository={repo} />
        <TitleHeading>{repo.name}</TitleHeading>
      </div>
      {/* {data ? (
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
      )} */}
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
        null
      )}
    </Container>
  );
};

export default RepoInfoCard;
