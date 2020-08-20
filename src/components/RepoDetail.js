import React from 'react';
import axios from 'axios';
import { BorderBox, Heading, Text, Link } from '@primer/components';

import { useAppState } from '../context/app-state-context';

const repoData = (repo, token) => {
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/repo/${repo.name}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((data) => data)
    .catch(() => null);
};

const DetailView = ({ repo, token }) => {
  let data = repoData(repo, token) || null;

  return (
    <React.Fragment>
      <BorderBox border='none' borderBottom={1} mb='1rem' pb='1rem'>
        <Heading
          fontSize='2.5rem'
          fontWeight='900'
          fontFamily='Helvetica'
          color='#333333'
        >
          {repo.name}
        </Heading>
        <Heading
          fontSize='1rem'
          fontWeight='700'
          fontFamily='Helvetica'
          color='#333333'
        >
          <Link
            href={repo.homepageUrl ? repo.homepageUrl : '#'}
            color='#0366d6'
          >
            {repo.nameWithOwner}
          </Link>
        </Heading>
      </BorderBox>
      {data ? (
        <p>when available, sentiment analysis goes here</p>
      ) : (
        <BorderBox border='none' borderBottom={1} mb='1rem' pb='1rem'>
          <Heading
            fontSize='1rem'
            fontFamily='Helvetica'
            color='#333333'
            pb='.5rem'
          >
            Sentiment Analysis / PR Statistics:
          </Heading>
          <Text fontFamily='Helvetica' color='#333333'>
            No advanced information available at this moment. Keep growing your
            repo. With more activity there's more information to gather so that
            we can provide you with meaningful feedback!
          </Text>
        </BorderBox>
      )}
      <BorderBox border='none' borderBottom={1} mb='1rem' pb='1rem'>
        <Heading
          fontSize='1rem'
          fontFamily='Helvetica'
          color='#333333'
          pb='.5rem'
        >
          Description:
        </Heading>
        <Text fontFamily='Helvetica' color='#333333'>
          {repo.description ? repo.description : `no description provided`}
        </Text>
      </BorderBox>
      <Heading
        fontSize='1rem'
        fontFamily='Helvetica'
        color='#333333'
        pb='.5rem'
      >
        This repository has been:
      </Heading>
      <Text fontFamily='Helvetica' color='#333333' pl='1rem'>
        Forked:
      </Text>
      <Text fontFamily='Helvetica' color='#333333' pl='1rem'>{`${
        repo.forkCount || 0
      } times`}</Text>
      <br />
      <Text fontFamily='Helvetica' color='#333333' pl='1rem'>
        Watched:
      </Text>
      <Text fontFamily='Helvetica' color='#333333' pl='1rem'>{`${
        repo.watchCount || 0
      } times`}</Text>
      <br />
      <Text fontFamily='Helvetica' color='#333333' pl='1rem'>
        Starred:
      </Text>
      <Text fontFamily='Helvetica' color='#333333' pl='1rem'>{`${
        repo.starCount || 0
      } times`}</Text>

  
    </React.Fragment>
  );
};

const RepoDetail = () => {
  const {
    state: { activeItem, token },
  } = useAppState();

  return (
    <BorderBox
      gridArea='detail'
      marginY='1rem'
      p='1rem'
      maxWidth='600px'
      marginX='auto'
      backgroundColor='gray.0'
    >
      {activeItem ? (
        <DetailView repo={activeItem} token={token} />
      ) : (
        <Text fontFamily='Helvetica'>
          Repository details will be populated in here. Click a repo once to
          populate it's information and click it again to depopulate it. Or,
          just click another repository!
        </Text>
      )}
    </BorderBox>
  );
};

export default RepoDetail;
