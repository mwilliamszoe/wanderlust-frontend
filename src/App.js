import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import HomePage from "./Containers/HomePage";
// import HomepageLayout from "./Components/HomepageLayout";
// import Login from "./unused/Login";
import Signup from "./Components/Signup";
import ExperienceList from "./Containers/ExperienceList";
import CountryDetail from "./Components/CountryDetail";
import ExperienceDetail from "./Components/ExperienceDetail";
import Profile from "./Containers/Profile";
import RegionsList from "./Components/RegionsList";
import RegionDetail from "./Components/RegionDetail"; //change to RegionsCountries later
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    regions: [],
    currentUser: {},
    loggedin: false,
    likes: [],
    experiences: []
  };
  componentDidMount = () => {
    fetch("http://localhost:4000/regions")
      .then(r => r.json())
      .then(regions =>
        this.setState({
          regions
        })
      );
    fetch("http://localhost:4000/likes")
      .then(r => r.json())
      .then(likes =>
        this.setState({
          likes
        })
      );
    fetch("http://localhost:4000/experiences")
      .then(r => r.json())
      .then(experiences =>
        this.setState({
          experiences
        })
      );
    if (localStorage.getItem("token") !== null) {
      this.setState({
        loggedin: true
      });
    }
  };

  setLoggedIn = loggedin => {
    this.setState({
      loggedin: loggedin
    });
  };

  setLoggedOut = loggedout => {
    this.setState({
      loggedin: loggedout
    });
  };

  setCurrentUser = currentUser => {
    this.setState({
      currentUser
    });
  };

  resetExperiences = experiences => {
    this.setState({
      experiences
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Navigation loggedin={this.state.loggedin}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/experience-list"
              render={routeProps => (
                <ExperienceList
                  {...routeProps}
                  // userExperiences={this.state.userExperiences}
                  // likes={this.state.likes}
                  experiences={this.state.experiences}
                />
              )}
            />
            <Route
              path="/experience/:id"
              render={routeProps => (
                <ExperienceDetail
                  {...routeProps}
                  // userExperiences={this.state.userExperiences}
                  likes={this.state.likes}
                />
              )}
            />
            <Route path="/countries/:country" component={CountryDetail} />
            <Route
              path="/regions-list/:region-detail"
              component={RegionDetail}
            />
            <Route path="/regions-list" component={RegionsList} />
            <Route
              path="/profile"
              render={routeProps => (
                <Profile
                  {...routeProps}
                  currentUser={this.state.currentUser}
                  // likes={this.state.likes}
                  resetExperiences={experiences =>
                    this.resetExperiences(experiences)
                  }
                />
              )}
            />
            <Route
              path="/login"
              render={routeProps => (
                <Signup
                  {...routeProps}
                  setCurrentUser={this.setCurrentUser}
                  setLoggedIn={this.setLoggedIn}
                  setLoggedOut={this.setLoggedOut}
                  route={"login"}
                />
              )}
            />
            <Route
              path="/signup"
              render={routeProps => (
                <Signup
                  {...routeProps}
                  setCurrentUser={this.setCurrentUser}
                  setLoggedIn={this.setLoggedIn}
                  setLoggedOut={this.setLoggedOut}
                  route={"signup"}
                />
              )}
            />
          </Switch>
        </Navigation>
      </BrowserRouter>
    );
  }
}

export default App;
