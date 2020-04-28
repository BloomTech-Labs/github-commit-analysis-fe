import React from 'react';
import { BorderBox, Heading, Text, Link } from '@primer/components';

import { useAppState } from '../context/app-state-context';

const DetailView = ({ repo }) => (
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
        <Link href={repo.homepageUrl ? repo.homepageUrl : '#'} color='#0366d6'>
          {repo.nameWithOwner}
        </Link>
      </Heading>
    </BorderBox>
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
    <Heading fontSize='1rem' fontFamily='Helvetica' color='#333333' pb='.5rem'>
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

const RepoDetail = () => {
  const {
    state: { activeItem },
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
        <DetailView repo={activeItem} />
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
