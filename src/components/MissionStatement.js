import React from "react";
import styled from "styled-components";
import { Box, Text, Heading } from "@primer/components";

const BoxesAround = styled.div`
  border: 2px solid #dcdcdc;
  margin: 15px;
`;

const MissionStatement = () => {
  return (
    <Box>
      <Box height="auto">
        <BoxesAround>
          <Heading
            fontSize="2rem"
            fontFamily="Helvetica"
            margin=" 1.5rem 0 1.5rem 3rem"
            textAlign="left"
          >
            Mission
          </Heading>
          <Text
            as="p"
            fontSize="1.4rem"
            fontFamily="Helvetica"
            margin="0 3rem 3rem 3rem"
            textAlign="justified"
          >
            People interact with repositories all the time, but there is no
            visibility into how it correlates to the "success" of the
            repositories. There are plenty of articles out there outlining
            GitHub "best practices", but the vast majority seem to be
            subjective, based on intuition and experience, not evidence-based.
            <br />
            <br />
            Our mission is to make open source a better experience for
            developers and maintainers by committing to actionable insights for
            project success.
          </Text>
        </BoxesAround>
      </Box>
    </Box>
  );
};
export default MissionStatement;
