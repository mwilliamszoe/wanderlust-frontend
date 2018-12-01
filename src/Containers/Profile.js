import React from "react";
import { Container } from "semantic-ui-react";
import NewExperienceForm from "../Components/NewExperienceForm";
import ExperienceCard from "../Containers/ExperienceCard";

const Profile = props => {
  // console.log(props.user_experiences);
  return (
    <div>
      <Container />
      <NewExperienceForm />
      {props.user_experiences.map((ex, idx) => {
        return <ExperienceCard experience={ex} key={idx} />;
      })}
    </div>
  );
};

export default Profile;
