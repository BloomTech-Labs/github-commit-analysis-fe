import React from "react";
import { Flex, Heading, Box, Text} from "@primer/components";
import styled from "styled-components"
import ".../../font-awesome/css/font-awesome.min.css";
const Pics = styled.img`
  height: 200px;
  width: 200px;
  display: block;
  margin: 0 auto;
  margin-bottom: 2px;
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
const Boxes = styled.div`
background-color: #DCDCDC;
padding-top: 2rem;
padding-bottom: 2rem;
// border: 2px solid black;
box-shadow: 0px 5px 5px 10px #0A9AEC;
margin: 15px 5px 15px 5px;
`
const TeamCard = (props) => {
  return (
    <Box
      className="block"
      height="auto"
      width="260px"
      backgroundColor="#EEEEEE"
      margin="10px 20px 10px 20px"
    >

     <Boxes className={`popup`}>
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
    </Boxes>
    </Box>
  )
};
export default TeamCard;