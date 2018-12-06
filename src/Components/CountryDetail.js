import React from "react";
import { Jumbotron } from "react-bootstrap";
// import { Segment, Card } from "semantic-ui-react";
import TabDetail from "../Containers/TabDetail";
// import ExperienceCard from "../Containers/ExperienceCard";
// import { NavLink } from "react-router-dom";

const CountryDetail = props => {
  return (
    <div>
      <Jumbotron>
        <h1>{props.location.state.country.name}</h1>
        <hr />
      </Jumbotron>
      <div className="country">
        <div className="country-description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </div>
        {/* <Segment>
          <Card.Group itemsPerRow={6}>{<ExperienceCard />}</Card.Group>
        </Segment> */}
        <TabDetail />
        <TabDetail />
        <TabDetail />
      </div>
      {props.children}
    </div>
  );
};

export default CountryDetail;
