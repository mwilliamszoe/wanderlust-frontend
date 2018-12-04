import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Card } from "semantic-ui-react";

const MySaves = props => {
  const like = props.likes.filter(like => {
    return like.user_id === parseInt(localStorage.getItem("user"));
  });
  const likedExperience = props.experiences.filter(experience => {
    return like.filter(like => {
      return experience.id === like.experience_id;
    });
  });
  const myExperience = likedExperience.map(experience => {
    return <ExperienceCard experience={experience} />;
  });
  return myExperience;
};

export default MySaves;
