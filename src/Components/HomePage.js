import React from "react";
// import HomepageHeading from "./HomepageLayout";
import PropTypes from "prop-types";
import { Container, Header, Segment } from "semantic-ui-react";

// const HomePage = props => {
//   return (
//     <div>
//       <HomepageHeading />
//       {props.children}
//     </div>
//   );
// };

// export default HomePage;

const HomepageHeading = ({ mobile }) => (
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
          fontSize: mobile ? "2em" : "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: mobile ? "1.5em" : "3em"
        }}
        className="headerTitle"
      />
      <Header
        as="h2"
        content="Some other header subtitle"
        inverted
        style={{
          fontSize: mobile ? "1.5em" : "1.7em",
          fontWeight: "normal",
          marginTop: mobile ? "0.5em" : "1.5em"
        }}
      />
    </Container>
  </Segment>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

export default HomepageHeading;
