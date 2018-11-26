import React from "react";
import PropTypes from "prop-types";
import { Container, Header, Segment } from "semantic-ui-react";

const HomepageHeading = ({ mobile }) => {
  return (
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 700, padding: "1em 0em" }}
      vertical
    >
      <Container text>
        <Header
          as="h1"
          content="Wanderlust"
          inverted
          style={{
            fontSize: mobile ? "2em" : "6em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "1.5em" : "1.5em"
          }}
          className="headerTitle"
        />
      </Container>
    </Segment>
  );
};

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;
