import React from "react";
import { Flex, Heading, Box, Text} from "@primer/components";
import styled from "styled-components"
import ".../../font-awesome/css/font-awesome.min.css";
const Pics = styled.img`
  height: 150px;
  width: 150px;
  display: block;
  margin: 0 auto;
`
const Github = styled.a`
  background-color: white;
  margin: 5px;
  &:hover {
  background-color: #0A9AEC;
  }
`
const LinkedIn = styled.a`
  background-color: white;
  margin: 5px;
  &:hover {
  background-color: #2867B2;
  }
`
const Gmail = styled.a`
  background-color: white;
  margin: 5px;
  &:hover {
  background-color: #2867B2
  ;
  }
`
const TeamCard = (props) => {
  return (
    <Box
      height="auto"
      width="200px"
      backgroundColor="#EEEEEE"
      margin="10px 20px 10px 20px"
    >
      <Pics src={props.pic} alt="profile pic"/>
      <Heading textAlign="center">{props.name}</Heading>
      <Text as='p' textAlign="center">{props.bio}</Text>
      <Flex justifyContent="center">
        <Github href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        > <i className="fa fa-github cat"></i> </Github>
        {props.linkedIn ?
        <LinkedIn href={props.linkedIn}> <i className="fa fa-linkedin LI" aria-hidden="true"></i> </LinkedIn>
        : <Gmail href={props.email}> <i className="fa fa-envelope-square LI" aria-hidden="true" ></i> </Gmail> }
      </Flex>
    </Box>
  )
};
export default TeamCard;