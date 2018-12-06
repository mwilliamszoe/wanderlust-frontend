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
    // fetch("http://localhost:4000/likes")
    //   .then(r => r.json())
    //   .then(likes =>
    //     this.setState({
    //       likes
    //     })
    //   );
    fetch("http://localhost:4000/experiences")
      .then(r => r.json())
      .then(experiences =>
        this.setState({
          experiences
        })
      );
    if (localStorage.getItem("token") !== null) {
      fetch("http://localhost:4000/finduserfromtoken", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(user => {
          this.setCurrentUser(user);
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
      currentUser,
      loggedin: !!currentUser
    });
  };

  resetExperiences = experiences => {
    this.setState({
      experiences
    });
  };

  resetLikedExperiences = likedExperiences => {
    // this.setState({
    //   likes: likedExperiences
    // });
    fetch("http://localhost:4000/finduserfromtoken", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(user => {
        this.setCurrentUser(user);
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
                  resetLikedExperiences={likedExperiences =>
                    this.resetLikedExperiences(likedExperiences)
                  }
                  // likedExperiences={this.state.likedExperiences}
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
                  resetExperiences={likedExperiences =>
                    this.resetExperiences(likedExperiences)
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
