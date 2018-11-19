import React, { Component } from "react";
import HomepageHeading from "./HomepageLayout";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// const Navigation = props => {
//   return (
//     <div>
//       <Menu fixed="top" pointing secondary id="topMenu">
//         <Container>
//           <Menu.Item as={NavLink} name="home" to="/" />
//           {/* NavLink is Link from react router, name is name displayed on link, 'to' is route it will direct to */}
//           <Menu.Item as={NavLink} name="Experiences" to="/experiences" />
//         </Container>
//       </Menu>
//       {props.children}
//     </div>
//   );
// };

// export default Navigation;

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

export class MobileNavigation extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            inverted
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as={NavLink} name="home" to="/" />
            <Menu.Item as={NavLink} name="experiences" to="/experiences" />
            <Menu.Item as={NavLink} name="login" to="/login" />
            <Menu.Item as={NavLink} name="signup" to="/signup" />
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: "100vh" }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              {/* <Container> */}
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>

                  <Button
                    as="a"
                    inverted
                    style={{ marginLeft: "0.5em" }}
                    color="violet"
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
              {/* </Container> */}
              {/* <HomepageHeading mobile /> */}
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileNavigation.propTypes = {
  children: PropTypes.node
};
