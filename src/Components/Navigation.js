// 1. In Navigation, when the app loads, check if a token exists in localStorage
// 2. If it does, set `loggedIn` state to true (otherwise it's false)
// 3. If logged in is "false", show log in and sign up
// 4. If logged in is "true", show profile and log out

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import Loggedin from "../Containers/Loggedin";
import Loggedout from "../Containers/Loggedout";

export default class DesktopNavigation extends Component {
  render() {
    const { children } = this.props;
    // const { fixed } = this.state;
    // console.log("loggedin?", this.props.loggedin);
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment inverted textAlign="center" vertical>
            <Menu
              // fixed={fixed ? "top" : null}
              // inverted={!fixed}
              // pointing={!fixed}
              // secondary={!fixed}
              inverted
              pointing
              secondary
              size="large"
            >
              <Container>
                <Menu.Item as={NavLink} name="home" to="/" />
                <Menu.Item
                  as={NavLink}
                  name="Adventures"
                  to="/experience-list"
                />
                <Menu.Item as={NavLink} name="places" to="/regions-list" />
                <Menu.Item position="right">
                  {this.props.loggedin === true ? (
                    <Loggedin loggedin={this.props.loggedin} />
                  ) : (
                    <Loggedout loggedin={this.props.loggedin} />
                  )}
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
