import React from "react";
import { Image, Segment, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RegionCard = props => {
  console.log(props, "region card");
  return (
    <Segment>
      <Card
        raised
        as={Link}
        to={{
          pathname: "/regions-list/:region-detail",
          //change to RegionsCountries later
          state: {
            region: props.region
          }
        }}
      >
        <Image src={props.region.image} />
        <Card.Content>
          <Card.Header>{props.region.name}</Card.Header>
        </Card.Content>
      </Card>
    </Segment>
  );
};

export default RegionCard;
