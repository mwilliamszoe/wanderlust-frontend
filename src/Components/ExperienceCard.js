import React from "react";
import { Card, Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const ExperienceCard = props => {
  return (
    <div>
      <Card>
        <Image
          src="https://images.unsplash.com/photo-1464938769256-c01dc51fc983?ixlib=rb-0.3.5&s=aaf538cbfd3631fea15a7844ecf8fe76&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
          as={NavLink}
          to=""
          label={{ corner: "left", icon: "star", color: "yellow" }}
        />
        <Card.Content>
          <Card.Header>Go snowsleding in the andes!</Card.Header>
          <Card.Description>Country, City</Card.Description>
        </Card.Content>
      </Card>

      {props.children}
    </div>
  );
};

export default ExperienceCard;
