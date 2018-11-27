import React from "react";
import { Grid, Image, Rating, Icon } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";
// import ExperienceList from "./ExperienceList";
// import ExperienceDetail from "./ExperienceDetail";

const ExperienceRow = props => {
  // console.log(props, "experience row");
  return (
    <Grid.Row>
      <Grid.Column width={4}>
        <Link
          to={{
            pathname: `/experience/${props.experience.id}`,
            // pathname: "/experience-list/:experience-detail"
            state: {
              experience: props.experience
              // foo: "foo"
            }
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1534321238895-da3ab632df3e?ixlib=rb-0.3.5&s=3c59de3ec4c8e3dc03dce8c89b0fc6a0&auto=format&fit=crop&w=1050&q=80"
            // as={Link}
            // to={{
            //   pathname: `/experience/${props.experience.id}`
            //   // state: {
            //   //   experience: props.experiences
            //   // }
            // }}
          />
        </Link>
      </Grid.Column>
      <Grid.Column width={12}>
        <h3>{props.experience.title}</h3>
        <p>
          Donec dolor nulla, sodales at porttitor non, hendrerit vel velit. Ut
          vulputate pharetra dignissim. Cras laoreet id arcu eu finibus.
          Vestibulum et metus dictum eros commodo consequat. Pellentesque et
          laoreet neque. Praesent pretium interdum turpis vel tincidunt. Etiam
          nec nunc sed mauris dignissim ultricies non nec dolor. Suspendisse
          lorem purus, gravida vitae vehicula nec, tristique eget dui.
        </p>
      </Grid.Column>
      <Icon name="tree" />
      <Icon name="fire" />
      <Icon name="paw" />
      <br />
      <br />
      <Rating maxRating={5} clearable icon="star" />
    </Grid.Row>
  );
};

export default ExperienceRow;
