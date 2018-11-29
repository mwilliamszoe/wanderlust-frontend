import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Segment, Card } from "semantic-ui-react";
import TabDetail from "../Containers/TabDetail";
import ExperienceCard from "./ExperienceCard";
// import { NavLink } from "react-router-dom";

const CountryDetail = props => {
  // console.log(props.location.state);
  console.log(props.location.state, "why");
  return (
    <div>
      <Jumbotron>
        <h1>{props.location.state.country.name}</h1>
        <hr />
      </Jumbotron>
      <div className="country">
        <div className="country-description">
          The roughly 5000-year old Chinese civilization has endured through
          millennia of tumultuous upheaval and revolutions, periods of golden
          ages and anarchy alike. Through the recent economic boom initiated by
          the reforms of Deng Xiaoping, China is once again one of the leading
          nations in the world, buoyed by its large, industrious population and
          abundant natural resources. The depth and complexity of the Chinese
          civilization, with its rich heritage, has fascinated Westerners such
          as Marco Polo and Gottfried Leibniz through the Great Silk Road and
          more ways of culture exchange in centuries past, and will continue to
          excite - and bewilder - the traveler today.
        </div>
        <Segment>
          <Card.Group itemsPerRow={6}>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
          </Card.Group>
        </Segment>
        <TabDetail />
        <TabDetail />
        <TabDetail />
      </div>
      {props.children}
    </div>
  );
};

export default CountryDetail;
