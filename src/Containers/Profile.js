import React from "react";
import { Container, Image } from "semantic-ui-react";
import { Nav, NavItem } from "react-bootstrap";
import NewExperienceForm from "../Components/NewExperienceForm";
import ExperienceCard from "../Containers/ExperienceCard";

const Profile = props => {
  // console.log(props.userExperiences);

  return (
    <>
      <Container className="profile-container">
        <Image
          className="profile-image"
          src="https://images.unsplash.com/photo-1527348886649-3bd94dfd6694?ixlib=rb-0.3.5…yMDd9&s=31603f3…&auto=format&fit=crop&w=2767&q=80f"
        />
        <div className="profile-img-txt">
          Where will your journey take you...
        </div>
      </Container>
      <Nav bsStyle="pills" justified>
        <NavItem className="profile-nav-btn">My Saves</NavItem>
        <NavItem className="profile-nav-btn">My Adventures</NavItem>
        <NavItem className="profile-nav-btn">New Adventure</NavItem>
      </Nav>
      {/* <ExperienceCard /> */}
      <NewExperienceForm />
      {props.userExperiences.map((ex, idx) => {
        return <ExperienceCard experience={ex} key={idx} />;
      })}
    </>
  );
};

export default Profile;
