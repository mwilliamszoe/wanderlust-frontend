import React, { Component } from "react";
// import { Button, Form, Input } from "semantic-ui-react";
import NewExperienceForm from "../Components/NewExperienceForm";
import MyExperiences from "../Components/MyExperiences";

const Profile = props => {
  return (
    <div>
      <NewExperienceForm />
      {/* <MySaves /> */}
      <MyExperiences setCurrentUserCallback={props.setCurrentUserCallback} />
    </div>
  );
};

export default Profile;
