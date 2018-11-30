import React, { Component } from "react";
// import { Button, Form, Input } from "semantic-ui-react";
import NewExperienceForm from "../Components/NewExperienceForm";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user_experiences: []
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem("token");
    console.log(token);
    fetch(`http://localhost:4000/myexperiences`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    });
  };
  render() {
    return (
      <div>
        {this.state.user_experiences.map((ex, idx) => {
          console.log(ex);
          return;
        })}
      </div>
    );
  }
}

export default Profile;
