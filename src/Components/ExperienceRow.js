import React from "react";
import { Grid, Image, Rating, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const ExperienceRow = props => {
  return (
    <div>
      {/* <h1>Experiences by Mood/Country</h1> */}
      <Grid>
        <Grid.Column width={4}>
          <Image
            src="https://images.unsplash.com/photo-1534321238895-da3ab632df3e?ixlib=rb-0.3.5&s=3c59de3ec4c8e3dc03dce8c89b0fc6a0&auto=format&fit=crop&w=1050&q=80"
            as={NavLink}
            name="experience-detail"
            to="/mood/:experience"
          />
        </Grid.Column>
        <Grid.Column width={12}>
          <p>
            Donec dolor nulla, sodales at porttitor non, hendrerit vel velit. Ut
            vulputate pharetra dignissim. Cras laoreet id arcu eu finibus.
            Vestibulum et metus dictum eros commodo consequat. Pellentesque et
            laoreet neque. Praesent pretium interdum turpis vel tincidunt. Etiam
            nec nunc sed mauris dignissim ultricies non nec dolor. Suspendisse
            lorem purus, gravida vitae vehicula nec, tristique eget dui.
          </p>
          <Icon name="tree" />
          <Icon name="fire" />
          <Icon name="paw" />
          <br />
          <br />
          <Rating maxRating={5} clearable icon="star" />
        </Grid.Column>
      </Grid>

      {props.children}
    </div>
  );
};

export default ExperienceRow;
