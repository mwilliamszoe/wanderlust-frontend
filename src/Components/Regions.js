import React, { Component } from "react";
import { Grid, Image, Segment, Card } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

class Regions extends Component {
  render() {
    return (
      <div>
        <Segment>
          <Card.Group itemsPerRow={3}>
            <Card
              raised
              image="https://images.unsplash.com/photo-1519187903022-c0055ec4036a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b745ac0a699722085f70eae036268b1f&auto=format&fit=crop&w=675&q=80"
              as={NavLink}
              // name="country-name"
              to="/places/:regions"
              header="Asia"
              className="region-card"
            />
            <Card
              raised
              image="https://images.unsplash.com/photo-1504873977246-a857185bf4dc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2e6cbf08efad27137d1303a574717ab9&auto=format&fit=crop&w=500&q=60"
              // as={NavLink}
              // name="country-name"
              // to="/places/:regions"
              header="Africa"
              className="region-card"
            />
            <Card
              raised
              image="https://images.unsplash.com/photo-1528360602530-1b4563dcc244?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0740f1c5566ab85fdc3b79a7a1aff5ea&auto=format&fit=crop&w=500&q=60"
              // as={NavLink}
              // name="country-name"
              // to="/places/:regions"
              header="Australia"
              className="region-card"
            />
          </Card.Group>
        </Segment>
        {this.props.children}
      </div>
    );
  }
}

export default Regions;
