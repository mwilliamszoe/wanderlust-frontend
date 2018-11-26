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
        <Image src="https://images.unsplash.com/photo-1519187903022-c0055ec4036a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b745ac0a699722085f70eae036268b1f&auto=format&fit=crop&w=675&q=80" />
        <Card.Content>
          <Card.Header>{props.region.name}</Card.Header>
        </Card.Content>
      </Card>
    </Segment>
  );
};

export default RegionCard;
