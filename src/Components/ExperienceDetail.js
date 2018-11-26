import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Segment, List, Grid, Header, Table } from "semantic-ui-react";

class ExperienceDetail extends Component {
  state = {
    experiences: []
  };
  componentDidMount = () => {
    fetch("http://localhost:4000/experiences")
      .then(r => r.json())
      .then(ex =>
        this.setState({
          experiences: ex
        })
      );
  };

  render() {
    // console.log(this.state.experiences);
    // console.log(this.props.match.params.id, this.state.experiences);
    const experienceId = this.props.match.params.id;
    const experiencesArray = this.state.experiences;
    const matchedExperience = experiencesArray.map(experience => {
      if(experience.id === experienceId;) 

    });
    console.log(this.props.match.params.id, matchedExperience);
    return (
      <div>
        <Jumbotron>
          <h1>EXPERIENCE DETAIL</h1>
          <hr />
        </Jumbotron>
        <div className="Experience">
          <div className="Experience-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            fermentum nunc, sit amet gravida ex. Suspendisse potenti. In sed
            tellus vel leo vehicula semper et vel sem. Sed ac placerat velit.
            Sed neque metus, blandit eu aliquet sit amet, euismod eu dui. Proin
            vel vehicula lorem. Quisque pharetra nibh at dui bibendum luctus.
            Suspendisse porttitor tincidunt nulla. Sed pharetra tellus non
            ligula pretium gravida. Nam leo lectus, dignissim nec iaculis quis,
            dignissim semper purus. Proin porta felis sit amet lacus commodo, ut
            volutpat enim commodo. Nunc ultrices sem eget blandit iaculis. Donec
            eu consequat risus, ac varius erat. Integer nisi orci, maximus eu
            dapibus laoreet, rhoncus at libero. Aliquam ac nisl pharetra turpis
            iaculis viverra vitae condimentum mauris. Nam ut quam elementum,
            pharetra est vitae, tincidunt turpis. Aenean eget magna in est
            auctor aliquam ac nec dolor. Suspendisse venenatis quam eget dui
            tristique finibus. Sed hendrerit in est at lobortis. Sed nec justo
            urna. Donec justo eros, laoreet vel ornare quis, blandit sed dolor.
            Donec euismod orci nec tellus consequat, id interdum eros tempus.
            Mauris vitae vestibulum dolor, nec vestibulum dui. Aliquam viverra
            risus id orci porta lobortis. In quis facilisis orci. Suspendisse
            vehicula arcu sed nunc lobortis, id pretium arcu porta. Donec
            ullamcorper mi mauris, id rutrum augue tincidunt quis. Duis in
            imperdiet nisi. Suspendisse nisl mi, lacinia vitae posuere id,
            pellentesque vehicula sem. Etiam efficitur elit tempor condimentum
            condimentum. Duis consequat suscipit risus, eget mattis magna
            rhoncus quis. Proin gravida facilisis turpis non hendrerit. Mauris
            eleifend vestibulum felis in laoreet. Etiam scelerisque id diam in
            dictum. Ut et felis ut nunc aliquet egestas nec in diam.
            Pellentesque hendrerit tincidunt enim scelerisque gravida. Nam a
            enim tempus, rutrum erat eu, eleifend leo. Proin in ligula quis eros
            gravida hendrerit. In posuere, mauris mattis dictum vehicula, est
            quam facilisis nisi, nec ultrices velit dui sed nisl. Etiam
            consequat varius arcu nec ornare. Aliquam ultrices magna est, sit
            amet placerat ligula dapibus a. Duis vel mauris ac tortor facilisis
            iaculis. Nullam sit amet orci et elit volutpat gravida sed quis
            urna. Suspendisse dapibus dui risus, ut tempor odio dictum vel.
            Nullam molestie tortor dui. Donec eget lectus at est scelerisque
            vestibulum. Praesent fringilla volutpat tellus non bibendum. Nunc
            tincidunt bibendum felis eu pulvinar. Vestibulum lobortis
            sollicitudin nulla, id scelerisque eros tincidunt in. Suspendisse
            risus tortor, porttitor nec est sed, iaculis dapibus dolor. Nam
            mauris odio, vestibulum et condimentum sed, vestibulum eget metus.
            Aliquam congue quam nec lobortis semper. Curabitur id diam leo.
            Suspendisse potenti. Sed maximus, ante sed pellentesque rutrum,
            lorem velit hendrerit dui, tempus varius eros neque vel augue.
            Nullam facilisis nulla lectus, et ullamcorper sapien cursus eget.
            Mauris in euismod dolor. Donec sed hendrerit leo, in efficitur
            neque. Phasellus sed tempor enim, tristique fringilla metus.
            Pellentesque sapien mauris, iaculis eu eros quis, vestibulum
            bibendum ipsum. Quisque convallis bibendum lorem, quis tincidunt
            diam molestie eget. Proin tristique vestibulum lectus nec elementum.
          </div>
          <Segment>
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
          <Segment>
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
        {/* {props.children} */}
      </div>
    );
  }
}

export default ExperienceDetail;
