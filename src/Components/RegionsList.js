import React, { Component } from "react";
//RENDERS LIST OF REGION CARDS
import RegionCard from "./RegionCard";
import { Card, Segment } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";

class RegionsList extends Component {
  state = {
    regions: []
  };
  componentDidMount = () => {
    fetch("http://localhost:4000/regions")
      .then(r => r.json())
      .then(r =>
        this.setState({
          regions: r
        })
      );
  };
  render() {
    const regions = this.state.regions.map((region, idx) => {
      return <RegionCard region={region} key={idx} />;
    });

    return (
      <Segment>
        <Card.Group>{regions}</Card.Group>
      </Segment>
    );
  }
}

export default RegionsList;
