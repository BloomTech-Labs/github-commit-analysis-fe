import React, { useState } from "react";
import { Flex, Heading, Text } from "@primer/components";
import styled from "styled-components";
import ".../../font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Pics = styled.img`
  height: 200px;
  width: 200px;
  display: block;
  margin: 0 auto;
  margin-bottom: 2px;
`;

const Box = styled.div`
  height: auto;
  width: 260px;
  background-color: #eeeeee;
  margin: 20px 20px 10px 20px;
`;

const Github = styled.a`
  background-color: white;
  margin: 5px;
  &:hover {
    background-color: #0a9aec;
  }
`;

const LinkedIn = styled.a`
  background-color: white;
  margin: 5px;
  &:hover {
    background-color: #2867b2;
  }
`;

const Gmail = styled.a`
  background-color: white;
  margin: 5px;
  &:hover {
    background-color: #2867b2;
  }
`;
const Boxes = styled.div`
  background-color: #dcdcdc;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-shadow: 0px 5px 5px 10px #0a9aec;
  margin: 15px 5px 15px 5px;
`;

const TeamCard = (props) => {
  const {
    // buttonLabel,
    className = "popup",
  } = props;

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Box>
      <Boxes
        className={className}
        isOpen={open}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
        onClick={toggle}
      >
        <Pics onClick={toggle} src={props.pic} alt="profile pic" />
        <Heading textAlign="center">{props.name}</Heading>
        <Text as="p" textAlign="center">
          {props.bio}
        </Text>
        <Flex justifyContent="center">
          <Github href={props.github} target="_blank" rel="noopener noreferrer">
            {" "}
            <i className="fa fa-github cat"></i>{" "}
          </Github>
          {props.linkedIn ? (
            <LinkedIn href={props.linkedIn}>
              {" "}
              <i className="fa fa-linkedin LI" aria-hidden="true"></i>{" "}
            </LinkedIn>
          ) : (
            <Gmail href={props.email}>
              {" "}
              <i
                className="fa fa-envelope-square LI"
                aria-hidden="true"
              ></i>{" "}
            </Gmail>
          )}
        </Flex>
      </Boxes>
      {/* <button onClick={toggle}>{buttonLabel}</button>  */}
    </Box>
  );
};
export default TeamCard;
