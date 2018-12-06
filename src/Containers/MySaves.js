import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Card } from "semantic-ui-react";

const MySaves = props => {
  // console.log(props.currentUser.liked_experiences);
  // props.currentUser.liked_experiences.map(ex => {
  //   return <h1>{ex.title}</h1>;
  // });
  return <ExperienceCard currentUser={props.currentUser} />;
};

export default MySaves;
