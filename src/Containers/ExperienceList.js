import React from "react";
import ExperienceRow from "./ExperienceRow";
import { Grid, Segment } from "semantic-ui-react";
// import { Link } from "react-router-dom";

const ExperienceList = props => {
  const experience = props.experiences.map((ex, idx) => {
    return <ExperienceRow experience={ex} key={idx} />;
  });

  return (
    <Segment>
      <Grid>{experience}</Grid>
    </Segment>
  );
};

export default ExperienceList;
