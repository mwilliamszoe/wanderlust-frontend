import React, { Component } from "react";
import Navigation from "./Components/Navigation";
// import HompageLayout from "./Components/HomepageLayout";
import HomePage from "./Components/HomePage";
import Experiences from "./Components/Experiences";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Continents from "./Components/Continents";
import Countries from "./Components/Countries";
import CountryDetail from "./Components/CountryDetail";
import ExperienceDetail from "./Components/ExperienceDetail";
import Mood from "./Components/Mood";
// import CountryExperiences from "./Components/CountryExperiences";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/mood/:experience" component={ExperienceDetail} />
            <Route path="/moods/:id" component={Mood} />
            {/* <Route
              path="/country-experiences/:id"
              component={CountryExperiences}
            /> */}
            <Route path="/experience-detail" component={ExperienceDetail} />
            <Route path="/countries/:country" component={CountryDetail} />
            <Route path="/places/:continents" component={Countries} />
            <Route path="/continents" component={Continents} />
            <Route path="/logIn" component={LogIn} />
            <Route path="/signUp" component={SignUp} />
          </Switch>
        </Navigation>
      </BrowserRouter>
    );
  }
}

export default App;
