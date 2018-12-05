import React, { Component } from "react";
import { Container, Image, Card, Segment } from "semantic-ui-react";
import { Nav, NavItem } from "react-bootstrap";
import NewExperienceForm from "../Components/NewExperienceForm";
import ExperienceCard from "../Containers/ExperienceCard";
import MySaves from "../Containers/MySaves";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      displaySaves: true,
      displayForm: false,
      displayMyExperiences: false
    };
  }

  displaySaves = () => {
    this.setState({
      displaySaves: true,
      displayForm: false,
      displayMyExperiences: false
    });
  };

  displayForm = () => {
    this.setState({
      displayForm: true,
      displaySaves: false,
      displayMyExperiences: false
    });
  };

  displayMyExperiences = () => {
    this.setState({
      displayMyExperiences: true,
      displayForm: false,
      displaySaves: false
    });
  };

  render() {
    const currentUser = this.props.currentUser;
    return (
      <>
        <Container className="profile-container">
          <Image
            className="profile-image"
            src="https://images.unsplash.com/photo-1527348886649-3bd94dfd6694?ixlib=rb-0.3.5…yMDd9&s=31603f3…&auto=format&fit=crop&w=2767&q=80f"
          />
          <div className="profile-img-txt">
            Where will your journey take you...
            {localStorage.getItem("email")
              ? `${localStorage.getItem("email")}`
              : null}
          </div>
        </Container>
        <Nav bsStyle="pills" justified>
          <NavItem className="profile-nav-btn" onClick={this.displaySaves}>
            My Saves
          </NavItem>
          <NavItem
            className="profile-nav-btn"
            onClick={this.displayMyExperiences}
          >
            My Adventures
          </NavItem>
          <NavItem className="profile-nav-btn" onClick={this.displayForm}>
            New Adventure
          </NavItem>
        </Nav>
        <Segment>
          {this.state.displaySaves ? (
            <Card.Group>
              <MySaves currentUser={currentUser} />
            </Card.Group>
          ) : null}
          {this.state.displayForm ? (
            <NewExperienceForm resetExperiences={this.props.resetExperiences} />
          ) : null}
          {this.state.displayMyExperiences ? (
            <Card.Group>
              {/* {currentUser.experience.length === 0 ? (
              <h1>"Nothing Yet!"</h1>
            ) : (
              currentUser.experience.map((ex, idx) => {
                return <ExperienceCard experience={ex} key={idx} />;
              })
            )} */}

              {currentUser.experience.map((ex, idx) => {
                return (
                  <ExperienceCard
                    experience={ex}
                    key={idx}
                    className="ex-card"
                  />
                );
              })}
            </Card.Group>
          ) : null}
        </Segment>
      </>
    );
  }
}
export default Profile;
