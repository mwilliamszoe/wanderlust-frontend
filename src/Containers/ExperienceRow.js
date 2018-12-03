import React, { Component } from "react";
import { Grid, Image, Rating, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import ExperienceList from "./ExperienceList";
// import ExperienceDetail from "./ExperienceDetail";

class ExperienceRow extends Component {
  constructor() {
    super();
    this.state = {
      liked: false
    };
  }

  handleClick = () => {
    // this.setState({
    //   liked: !this.state.liked
    // });
    return;
  };
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={4}>
          <Link
            to={{
              pathname: `/experience/${this.props.experience.id}`,
              state: {
                experience: this.props.experience
              }
            }}
          >
            <Image src="https://images.unsplash.com/photo-1534321238895-da3ab632df3e?ixlib=rb-0.3.5&s=3c59de3ec4c8e3dc03dce8c89b0fc6a0&auto=format&fit=crop&w=1050&q=80" />
          </Link>
        </Grid.Column>
        <Grid.Column width={12}>
          <div className="heart-title">
            <h2>{this.props.experience.title}</h2>
            {/* <Button inverted onClick={this.handleClick}>
              <Rating icon="heart" size="huge" className="like" />
            </Button> */}
          </div>
          <br />
          <p>
            Donec dolor nulla, sodales at porttitor non, hendrerit vel velit. Ut
            vulputate pharetra dignissim. Cras laoreet id arcu eu finibus.
            Vestibulum et metus dictum eros commodo consequat. Pellentesque et
            laoreet neque. Praesent pretium interdum turpis vel tincidunt. Etiam
            nec nunc sed mauris dignissim ultricies non nec dolor. Suspendisse
            lorem purus, gravida vitae vehicula nec, tristique eget dui.
          </p>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default ExperienceRow;
