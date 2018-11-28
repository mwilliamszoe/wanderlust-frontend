import React, { Component } from "react";
import Navigation from "./Components/Navigation";
// import HomepageLayout from "./Components/HomepageLayout";
import HomePage from "./Components/HomePage";
import HomepageLayout from "./Components/HomepageLayout";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ExperienceList from "./Components/ExperienceList";
import CountryDetail from "./Components/CountryDetail";
import ExperienceDetail from "./Components/ExperienceDetail";
import Profile from "./Components/Profile";
import RegionsList from "./Components/RegionsList";
import RegionDetail from "./Components/RegionDetail"; //change to RegionsCountries later
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
            {/* <Route
              exact
              path="/"
              render={routerProps => <HomePage {...routerProps} />}
            /> */}
            <Route exact path="/" component={HomePage} />
            <Route path="/experience-list" component={ExperienceList} />
            <Route path="/experience/:id" component={ExperienceDetail} />
            <Route path="/countries/:country" component={CountryDetail} />
            <Route
              path="/regions-list/:region-detail"
              component={RegionDetail}
            />
            <Route path="/regions-list" component={RegionsList} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />

            {/* <Route path="/logIn" component={LogIn} /> */}
            {/* <Route path="/moods/:id" component={Mood} /> */}
            {/* <Route
              path="/country-experiences/:id"
              component={CountryExperiences}
            /> */}
            {/* <Route path="/experience-detail" component={ExperienceDetail} /> */}

            {/* change to RegionsCountries later */}
          </Switch>
        </Navigation>
      </BrowserRouter>
    );
  }
}

export default App;
