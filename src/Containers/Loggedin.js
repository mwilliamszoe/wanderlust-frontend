import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const handleClick = () => {
  localStorage.removeItem("token");
  this.props.setLoggedOut(false);
};

const Loggedin = () => {
  return (
    <>
      <Button inverted as={Link} to="/profile" color="teal">
        Profile
      </Button>
      <Button
        as={Link}
        to="/"
        inverted
        style={{ marginLeft: "0.5em" }}
        onClick={handleClick}
      >
        Logout
      </Button>
    </>
  );
};

export default Loggedin;
