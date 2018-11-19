import React from "react";
import { Grid, Image, Segment } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const Continents = props => {
  return (
    <div>
      <h1>Continents</h1>
      <Segment>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Image
                src="https://images.unsplash.com/photo-1508964942454-1a56651d54ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1977dea472daee640b0cf9c64f455a0&auto=format&fit=crop&w=2550&q=80"
                id="afirca"
              />
            </Grid.Column>
            <Grid.Column>
              <Image
                src="https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-0.3.5&s=e5354da90adcd0a99410da73977bf8d7&auto=format&fit=crop&w=2550&q=80"
                id="asia"
                as={NavLink}
                name="country-name"
                to="/places/:continents"
              />
            </Grid.Column>
            <Grid.Column>
              <Image
                src="https://images.unsplash.com/photo-1515131195542-a5cb5f0c55de?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f19c457d1b03773a0a5c8babbd25f4f0&auto=format&fit=crop&w=2468&q=80"
                id="north-america"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      {props.children}
    </div>
  );
};

export default Continents;
