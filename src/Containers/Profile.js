import React from "react";
// import { Button, Form, Input } from "semantic-ui-react";
// import NewExperienceForm from "../Components/NewExperienceForm";
import ExperienceCard from "../Containers/ExperienceCard";

const Profile = props => {
  // console.log(props.user_experiences);
  return (
    <div>
      {/* we want to return
     - a Form
     <NewExperienceForm />
     - a list of experiences */}
      {props.user_experiences.map((ex, idx) => {
        return <ExperienceCard experience={ex} key={idx} />;
      })}
    </div>
  );
};

export default Profile;

// <div>
// <NewExperienceForm />
// <ExperienceCard
//   // setCurrentUserCallback={props.setCurrentUserCallback}
//   // user_experiences={props.user_experiences}
// />
// {/* <MySaves /> */}
// </div>
