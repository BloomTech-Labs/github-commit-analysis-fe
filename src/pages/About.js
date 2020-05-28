import React from 'react';
import styled from "styled-components";
import ".../../font-awesome/css/font-awesome.min.css";
import TeamCard from "../components/TeamCard";
import data from "../data/TeamInfo";
import MissionStatement from "../components/MissionStatement"

const CardHolder = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 5rem;
`
export default () => (
  <div>
    <MissionStatement/>
    <CardHolder>
      {data.map(member => {
        return (
          <TeamCard
            pic={member.pic}
            name={member.name}
            bio={member.bio}
            github={member.github}
            linkedIn={member.linkedIn}
            key={member.id}
          />
        )
      })}
    </CardHolder>
  </div>
);