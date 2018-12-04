import React from "react";
// import { Container, Image } from "semantic-ui-react";
// import ExperienceCard from "./ExperienceCard";

const MySaves = props => {
  const like = props.likes.filter(like => {
    return like.user_id === parseInt(localStorage.getItem("user"));
  });

  return (
    <>
      <h1>My Saves</h1>

      {like.map((like, idx) => {
        return <p>experience# {like.experience_id}</p>;
      })}
    </>
  );
};

export default MySaves;
