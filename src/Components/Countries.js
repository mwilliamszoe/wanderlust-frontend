import React from "react";
import { Segment, Card, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Countries = props => {
  return (
    <div>
      <Segment>
        <Card.Group itemsPerRow={6}>
          <Card raised as={NavLink} to="/countries/:country">
            <Image src="https://images.unsplash.com/photo-1536315238512-4c8cebdaaf93?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5ebac9881c49e3bfd8ddaa83e2bb271a&auto=format&fit=crop&w=800&q=60" />
            <Card.Content>
              <Card.Header>{}</Card.Header>
            </Card.Content>
          </Card>
        </Card.Group>
      </Segment>
      {props.children}
    </div>
  );
};

export default Countries;
