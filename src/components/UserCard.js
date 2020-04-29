import React from 'react';
import {
  Avatar,
  Box,
  BorderBox,
  Grid,
  Heading,
  Link,
  Text,
} from '@primer/components';

const UserCard = ({ user }) => (
  <BorderBox marginY='1rem' p='1rem' maxWidth='600px' marginX='auto'>
    <Grid gridTemplateColumns={['1fr', '1fr 2fr']} gridGap='1rem'>
      <Avatar
        src={user.avatarUrl}
        alt='github avatar'
        size={248}
        marginY='auto'
      />
      <Grid gridTemplateRows='1fr 1fr'>
        <Box>
          <Heading
            fontSize='2.5rem'
            fontWeight='700'
            fontFamily='Helvetica'
            color='#333333'
          >
            <Link href={user.githubUrl} color='#0366d6'>
              {user.login}
            </Link>
          </Heading>
          <Text fontFamily='Helvetica' fontWeight='700' color='#333333'>
            Name:
          </Text>
          <Text paddingLeft='0.5rem' fontFamily='Helvetica' color='#333333'>
            {user.name}
          </Text>
          <br />
          <Text fontFamily='Helvetica' fontWeight='700' color='#333333'>
            Location:
          </Text>
          <Text paddingLeft='0.5rem' fontFamily='Helvetica' color='#333333'>
            {user.location}
          </Text>
        </Box>
        <Box>
          <Heading
            fontSize='1.25rem'
            fontWeight='700'
            fontFamily='Helvetica'
            color='#333333'
          >
            Bio:
          </Heading>
          <Text fontFamily='Helvetica' color='#333333'>
            {user.bio}
          </Text>
        </Box>
      </Grid>
    </Grid>
  </BorderBox>
);

export default UserCard;
