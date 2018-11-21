import React from "react";
import { Segment } from "semantic-ui-react";
import ExperienceRow from "./ExperienceRow";
// import { NavLink } from "react-router-dom";

const Mood = props => {
  return (
    <div>
      <Segment>
        <h1>Outdoorsy mood</h1>
        <ExperienceRow />
        {props.children}
      </Segment>
    </div>
  );
};

export default Mood;
