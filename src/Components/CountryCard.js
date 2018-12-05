import React from "react";
import { Card, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CountryCard = props => {
  console.log(props);
  return (
    <Card
      raised
      as={Link}
      to={{
        pathname: "/countries/:country",
        state: {
          country: props.country
        }
      }}
    >
      <Image src={props.country.image} />
      <Card.Content>
        <Card.Header>{props.country.name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default CountryCard;
