import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CountryCard = props => {
  // console.log(props.country);
  return (
    <Card
      raised
      as={Link}
      to={{
        pathname: "/countries/:country",
        //change to RegionsCountries later
        state: {
          country: props.country
        }
      }}
    >
      <Image src="https://images.unsplash.com/photo-1536315238512-4c8cebdaaf93?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ebac9881c49e3bfd8ddaa83e2bb271a&auto=format&fit=crop&w=800&q=60" />
      <Card.Content>
        <Card.Header>{props.country.name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default CountryCard;
