import React from "react";
import { Segment, Card } from "semantic-ui-react";
// import { NavLink } from "react-router-dom";
import CountryCard from "./CountryCard";

const RegionDetail = props => {
  console.log(props.location.state);

  const country = props.location.state.region.countries.map((country, idx) => {
    return <CountryCard country={country} key={idx} />;
  });

  return (
    <Segment>
      <Card.Group>{country}</Card.Group>
    </Segment>
  );
};

export default RegionDetail;
//changet to RegionsCountries later
