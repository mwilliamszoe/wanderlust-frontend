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
  // componentDidMount = () => {
  //   fetch("https://localhost:4000/regions.json")
  //     .then(r => r.json())
  //     .then(region => console.log(region));
  // };
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
            <Route path="/places/:Regions" component={Countries} />
            <Route path="/Regions" component={Regions} />
            <Route path="/logIn" component={LogIn} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Navigation>
      </BrowserRouter>
    );
  }
}

export default App;
