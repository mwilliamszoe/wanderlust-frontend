import React from "react";
import { Card, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const ExperienceCard = props => {
  return (
    <div>
      <Card>
        <Image
          src="https://images.unsplash.com/photo-1469284390178-5ff99261c5b5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1862e7560412a1a52e9a5564c72eb3e9&auto=format&fit=crop&w=500&q=60"
          as={NavLink}
          to=""
          label={{ corner: "left", icon: "star", color: "yellow" }}
        />
        <Card.Content>
          <Card.Header>
            {
              null
              //name of experience should go here
            }
          </Card.Header>
          <Card.Description>
            {
              null
              //name of country should go here
            }
          </Card.Description>
        </Card.Content>
      </Card>

      {props.children}
    </div>
  );
};

export default ExperienceCard;
