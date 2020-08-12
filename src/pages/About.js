import React from "react";
import styled from "styled-components";
import ".../../font-awesome/css/font-awesome.min.css";
import TeamCard from "../components/TeamCard";
import data from "../data/TeamInfo";
import MissionStatement from "../components/MissionStatement";
import Footer from "../components/Footer";

const CardHolder = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 5rem;
`;

const About = styled.div`
  padding: 2px 0px 10px 0px;
  background-color: #eeeeee;
  border-radius: 6px;
  box-shadow: 0px 5px 5px 15px #a9a9a9;
  width: 59rem;
  margin-bottom: 100px;
  margin-top: 100px;
`;

const Aligner = styled.div`
  display: flex;
  justify-content: center;
`;

export default () => (
  <Aligner>
    <About>
      <MissionStatement />
      <CardHolder>
        {data.map((member) => {
          return (
            <TeamCard
              key={member.id}
              pic={member.pic}
              name={member.name}
              bio={member.bio}
              github={member.github}
              linkedIn={member.linkedIn}
              id={member.id}
            />
          );
        })}
      </CardHolder>
    </About>
    <Footer />
  </Aligner>
);
