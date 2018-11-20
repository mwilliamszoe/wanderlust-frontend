import React from "react";
import ExperienceRow from "./ExperienceRow";
// import { NavLink } from "react-router-dom";

const Mood = props => {
  return (
    <div>
      <h1>Mood - Outdoor</h1>
      <ExperienceRow />
      {props.children}
    </div>
  );
};

export default Mood;
