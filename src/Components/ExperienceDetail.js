import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import {
  Segment,
  List,
  Grid,
  Header,
  Table,
  Container,
  Button
} from "semantic-ui-react";

class ExperienceDetail extends Component {
  handleClick = () => {
    let uid = parseInt(localStorage.getItem("user_id"));
    let ex = this.props.location.state.experience.id;
    fetch(`http://localhost:4000/users/${uid}/liked_experiences/${ex}`)
      .then(r => r.json())
      .then(response => {
        console.log(response);
        if (response !== null) {
          fetch(`http://localhost:4000/likes/${response.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          })
            // .then(() => alert("unliked!"));
            .then(() => {
              fetch("http://localhost:4000/likes")
                .then(r => r.json())
                .then(response => {
                  this.props.resetLikedExperiences(response);
                  alert("unliked!");
                });
            });
        } else {
          fetch("http://localhost:4000/likes", {
            method: "POST",
            body: JSON.stringify({
              user_id: parseInt(localStorage.getItem("user_id")),
              experience_id: this.props.location.state.experience.id
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
            // .then(r => r.json)
            // .then(r => alert("liked!"));
            .then(() => {
              fetch("http://localhost:4000/likes")
                .then(r => r.json())
                .then(response => {
                  this.props.resetLikedExperiences(response);
                  alert("liked!");
                });
            });
        }
      });
  };

  render() {
    const ex = this.props.location.state.experience;
    return (
      <div>
        <Jumbotron>
          <h1>{ex.title}</h1>

          <Button icon="heart" color="red" onClick={this.handleClick} />
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
            Sed maximus, ante sed pellentesque rutrum, lorem velit hendrerit
            dui, tempus varius eros neque vel augue. Nullam facilisis nulla
            lectus, et ullamcorper sapien cursus eget. Mauris in euismod dolor.
            Donec sed hendrerit leo, in efficitur neque. Phasellus sed tempor
            enim, tristique fringilla metus. Pellentesque sapien mauris, iaculis
            eu eros quis, vestibulum bibendum ipsum. Quisque convallis bibendum
            lorem, quis tincidunt diam molestie eget. Proin tristique vestibulum
            lectus nec elementum.
          </Container>
        </Segment>
        <hr />
        <Segment className="packing-list">
          <Header className="packing-list-title">Packing List</Header>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <List>
                  <List.Item className="packing-list-item">Socks</List.Item>
                  <List.Item className="packing-list-item">Shoes</List.Item>
                  <List.Item className="packing-list-item">Hat</List.Item>
                  <List.Item className="packing-list-item">Belt</List.Item>
                  <List.Item className="packing-list-item">Sweater</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List>
                  <List.Item className="packing-list-item">Camera</List.Item>
                  <List.Item className="packing-list-item">Laptop</List.Item>
                  <List.Item className="packing-list-item">Usb</List.Item>
                  <List.Item className="packing-list-item">Sunscreen</List.Item>
                  <List.Item className="packing-list-item">Goggles</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <hr />
        <Segment className="other-info">
          <Header className="other-info-title">Other info</Header>

          <Table basic="very" className="other-info">
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
              <Table.Row>
                <Table.HeaderCell>Website</Table.HeaderCell>
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
