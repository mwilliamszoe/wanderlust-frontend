import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class DesktopNavigation extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            // style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              // color="blue"
            >
              <Container>
                <Menu.Item as={NavLink} name="home" to="/" />
                <Menu.Item as={NavLink} name="experiences" to="/experiences" />
                <Menu.Item as={NavLink} name="places" to="/continents" />
                <Menu.Item position="right">
                  <Button
                    // as="a"
                    inverted={!fixed}
                    as={NavLink}
                    name="login"
                    to="login"
                  >
                    Log in
                  </Button>
                  <Button
                    as={NavLink}
                    name="signup"
                    to="signup"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                    // color="violet"
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopNavigation.propTypes = {
  children: PropTypes.node
};
