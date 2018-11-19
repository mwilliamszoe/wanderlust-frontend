import React from "react";
import { Segment, Card } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Countries = props => {
  return (
    <div>
      <h1>Countries</h1>
      <Segment>
        <Card.Group itemsPerRow={6}>
          <Card
            raised
            image="https://images.unsplash.com/photo-1536315238512-4c8cebdaaf93?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ebac9881c49e3bfd8ddaa83e2bb271a&auto=format&fit=crop&w=800&q=60"
            as={NavLink}
            name="country-name"
            to="/countries/:country"
          />
        </Card.Group>
      </Segment>
      {props.children}
    </div>
  );
};

export default Countries;
