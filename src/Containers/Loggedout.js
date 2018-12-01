import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Loggedout = () => {
  //   const { children } = this.props;
  //   const { fixed } = this.state;
  return (
    <>
      <Button inverted as={Link} to="/login">
        Log in
      </Button>
      <Button
        as={Link}
        to="/signup"
        inverted
        color="teal"
        style={{ marginLeft: "0.5em" }}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Loggedout;
