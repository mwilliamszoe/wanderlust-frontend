import React, { Component } from "react";
import ExperienceRow from "../Containers/ExperienceRow";
import { Grid, Segment } from "semantic-ui-react";
// import { Link } from "react-router-dom";

class ExperienceList extends Component {
  state = {
    experiences: []
  };
  componentDidMount = () => {
    fetch("http://localhost:4000/experiences")
      .then(r => r.json())
      .then(e =>
        this.setState({
          experiences: e
        })
      );
  };
  render() {
    // console.log(this.state.experiences);
    const experience = this.state.experiences.map((ex, idx) => {
      return <ExperienceRow experience={ex} key={idx} />;
    });

    return (
      <Segment>
        <Grid>{experience}</Grid>
      </Segment>
    );
  }
}

export default ExperienceList;
