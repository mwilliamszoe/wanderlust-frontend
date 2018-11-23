import React, { Component } from "react";
import { Image, Segment, Card } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class Regions extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Card.Group itemsPerRow={3}>
            {this.props.regions.map(region => (
              <Card
                raised
                as={NavLink}
                to="/places/:regions"
                className="region-card"
              >
                <Image src="https://images.unsplash.com/photo-1519187903022-c0055ec4036a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b745ac0a699722085f70eae036268b1f&auto=format&fit=crop&w=675&q=80" />
                <Card.Content>
                  <Card.Header>{region.name}</Card.Header>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Segment>
        {this.props.children}
      </div>
    );
  }
}

export default Regions;
