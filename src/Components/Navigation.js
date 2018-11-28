import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Modal,
  Form
} from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

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
            >
              <Container>
                <Menu.Item as={NavLink} name="home" to="/" />
                <Menu.Item
                  as={NavLink}
                  name="experiences"
                  to="/experience-list"
                />
                <Menu.Item as={NavLink} name="places" to="/regions-list" />
                <Menu.Item position="right">
                  <Button inverted={!fixed} as={Link} name="login" to="/login">
                    Log In
                  </Button>
                  {/* <Modal trigger={<Button inverted={!fixed}>Log in</Button>}>
                    <Form>
                      <Form.Field>
                        <label>Email</label>
                        <input placeholder="Email" type="email" />
                      </Form.Field>
                      <Form.Field>
                        <label>Password</label>
                        <input placeholder="Password" type="password" />
                      </Form.Field>
                      <Button
                        type="submit"
                        color="green"
                        as={NavLink}
                        name="profile"
                        to="/login"
                      >
                        Submit
                      </Button>
                    </Form>
                  </Modal> */}
                  <Button
                    as={Link}
                    name="signup"
                    to="/signup"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
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
