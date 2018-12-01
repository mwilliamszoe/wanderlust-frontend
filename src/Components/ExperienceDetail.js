import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import {
  Segment,
  List,
  Grid,
  Header,
  Table,
  Container
} from "semantic-ui-react";

class ExperienceDetail extends Component {
  render() {
    // debugger;
    const ex = this.props.location.state.experience;
    return (
      <div>
        <Jumbotron>
          <h1>{ex.title}</h1>
          <hr />
        </Jumbotron>
        <Segment className="experience">
          <Container className="Experience-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            fermentum nunc, sit amet gravida ex. Suspendisse potenti. In sed
            tellus vel leo vehicula semper et vel sem. Sed ac placerat velit.
            Sed neque metus, blandit eu aliquet sit amet, euismod eu dui. Proin
            vel vehicula lorem. Quisque pharetra nibh at dui bibendum luctus.
            Suspendisse porttitor tincidunt nulla. Sed pharetra tellus non
            ligula pretium gravida. Nam leo lectus, dignissim nec iaculis quis,
            dignissim semper purus. Proin porta felis sit amet lacus commodo, ut
            volutpat enim commodo.
            <br />
            <br />
            Duis vel mauris ac tortor facilisis iaculis. Nullam sit amet orci et
            elit volutpat gravida sed quis urna. Suspendisse dapibus dui risus,
            ut tempor odio dictum vel. Nullam molestie tortor dui. Donec eget
            lectus at est scelerisque vestibulum. Praesent fringilla volutpat
            tellus non bibendum. Nunc tincidunt bibendum felis eu pulvinar.
            Vestibulum lobortis sollicitudin nulla, id scelerisque eros
            tincidunt in. Suspendisse risus tortor, porttitor nec est sed,
            iaculis dapibus dolor. Nam mauris odio, vestibulum et condimentum
            sed, vestibulum eget metus. Aliquam congue quam nec lobortis semper.
            Curabitur id diam leo. Suspendisse potenti. Sed maximus, ante sed
            pellentesque rutrum, lorem velit hendrerit dui, tempus varius eros
            neque vel augue. Nullam facilisis nulla lectus, et ullamcorper
            sapien cursus eget. Mauris in euismod dolor. Donec sed hendrerit
            leo, in efficitur neque. Phasellus sed tempor enim, tristique
            fringilla metus. Pellentesque sapien mauris, iaculis eu eros quis,
            vestibulum bibendum ipsum. Quisque convallis bibendum lorem, quis
            tincidunt diam molestie eget. Proin tristique vestibulum lectus nec
            elementum.
          </Container>
        </Segment>
        <Segment className="packing-list">
          <Header>Packing List</Header>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <List>
                  <List.Item>Apples</List.Item>
                  <List.Item>Pears</List.Item>
                  <List.Item>Oranges</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item>Apples</List.Item>
                  <List.Item>Pears</List.Item>
                  <List.Item>Oranges</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item>Apples</List.Item>
                  <List.Item>Pears</List.Item>
                  <List.Item>Oranges</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment className="other-info">
          <Header>Other info</Header>

          <Table basic="very">
            <Table.Body>
              <Table.Row>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Address</Table.HeaderCell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>Hours</Table.HeaderCell>
                <Table.Cell>Approved</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </div>
    );
  }
}

export default ExperienceDetail;
