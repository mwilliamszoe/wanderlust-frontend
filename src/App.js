import React, { Component } from "react";
import Navigation from "./Components/Navigation";
// import HompageLayout from "./Components/HomepageLayout";
import HomePage from "./Components/HomePage";
import Experiences from "./Components/Experiences";
import LogIn from "./Components/LogIn";
import Regions from "./Components/Regions";
import Countries from "./Components/Countries";
import CountryDetail from "./Components/CountryDetail";
import ExperienceDetail from "./Components/ExperienceDetail";
import Mood from "./Components/Mood";
import Profile from "./Components/Profile";
// import CountryExperiences from "./Components/CountryExperiences";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    regions: []
  };
  componentDidMount = () => {
    fetch("http://localhost:4000/regions")
      .then(r => r.json())
      .then(r =>
        this.setState({
          regions: r
        })
      );
  };
  render() {
    return (
      <BrowserRouter>
        <Navigation>
          <Switch>
            <Route
              exact
              path="/"
              render={routerProps => <HomePage {...routerProps} />}
            />
            <Route path="/experiences" component={Experiences} />
            <Route path="/mood/:experience" component={ExperienceDetail} />
            <Route path="/moods/:id" component={Mood} />
            {/* <Route
              path="/country-experiences/:id"
              component={CountryExperiences}
            /> */}
            <Route path="/experience-detail" component={ExperienceDetail} />
            <Route path="/countries/:country" component={CountryDetail} />
            <Route path="/places/:Regions" component={Countries} />
            <Route
              path="/Regions"
              render={routerProps => (
                <Regions regions={this.state.regions} {...routerProps} />
              )}
            />
            <Route path="/logIn" component={LogIn} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Navigation>
      </BrowserRouter>
    );
  }
}

export default App;
