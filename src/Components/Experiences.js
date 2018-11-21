import React from "react";
import { Segment, Card, Icon, Table, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Experiences = props => {
  return (
    <div>
      <Segment>
        <h1 className="experience-header">What kind of mood are you in?</h1>
        <Card.Group itemsPerRow={4}>
          <Card as={NavLink} name="mood" to="/moods/:id">
            <Card.Content>
              <Icon name="tree" size="massive" />
              <Card.Description>Outdoors</Card.Description>
            </Card.Content>
          </Card>
          {/* <Card>
            <Card.Content>
              <Icon name="tree" size="massive" />
              <Card.Description>Mood</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Icon name="tree" size="massive" />
              <Card.Description>Mood</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Icon name="tree" size="massive" />
              <Card.Description>Mood</Card.Description>
            </Card.Content>
          </Card> */}
        </Card.Group>
      </Segment>
      {/* <h3>Ordered By Country</h3>
      <Table basic="very">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Asia</Table.HeaderCell>
            <Table.HeaderCell>Africa</Table.HeaderCell>
            <Table.HeaderCell>North America</Table.HeaderCell>
            <Table.HeaderCell>South America</Table.HeaderCell>
            <Table.HeaderCell>Asia</Table.HeaderCell>
            <Table.HeaderCell>Africa</Table.HeaderCell>
            <Table.HeaderCell>North America</Table.HeaderCell>
            <Table.HeaderCell>South America</Table.HeaderCell>
            <Table.HeaderCell>South America</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>China</Table.Cell>
            <Table.Cell>Japan</Table.Cell>
            <Table.Cell>Korea</Table.Cell>
            <Table.Cell>Vietnam</Table.Cell>
            <Table.Cell>China</Table.Cell>
            <Table.Cell>Japan</Table.Cell>
            <Table.Cell>Korea</Table.Cell>
            <Table.Cell>Tibet</Table.Cell>
            <Table.Cell>Vietnam</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>China</Table.Cell>
            <Table.Cell>Japan</Table.Cell>
            <Table.Cell>Korea</Table.Cell>
            <Table.Cell>Vietnam</Table.Cell>
            <Table.Cell>China</Table.Cell>
            <Table.Cell>Japan</Table.Cell>
            <Table.Cell>Korea</Table.Cell>
            <Table.Cell>Tibet</Table.Cell>
            <Table.Cell>Vietnam</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>China</Table.Cell>
            <Table.Cell>Japan</Table.Cell>
            <Table.Cell>Korea</Table.Cell>
            <Table.Cell>Vietnam</Table.Cell>
            <Table.Cell>China</Table.Cell>
            <Table.Cell>Japan</Table.Cell>
            <Table.Cell>Korea</Table.Cell>
            <Table.Cell>Tibet</Table.Cell>
            <Table.Cell>Vietnam</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>China</Table.Cell>
            <Table.Cell>Japan</Table.Cell>
            <Table.Cell>Korea</Table.Cell>
            <Table.Cell>Vietnam</Table.Cell>
            <Table.Cell>China</Table.Cell>
            <Table.Cell>Japan</Table.Cell>
            <Table.Cell>Korea</Table.Cell>
            <Table.Cell>Vietnam</Table.Cell>
            <Table.Cell>Tibet</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table> */}
      {props.children}
    </div>
  );
};

export default Experiences;
