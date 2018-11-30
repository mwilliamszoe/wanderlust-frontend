import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const handleClick = () => {
  localStorage.removeItem("token");
};

const Loggedin = () => {
  // console.log(localStorage.getItem("token"));
  //   const { children } = this.props;
  //   const { fixed } = this.state;
  return (
    <>
      <Button
        //   inverted={!fixed}
        inverted
        as={Link}
        to="/profile"
      >
        Profile
      </Button>
      <Button
        as={Link}
        to="/"
        // inverted={!fixed}
        inverted
        // primary={fixed}
        style={{ marginLeft: "0.5em" }}
        onClick={handleClick}
      >
        Logout
      </Button>
    </>
  );
};

export default Loggedin;
