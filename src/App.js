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
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/experiences" component={Experiences} />
            {/* <Route path="/experiences/:country" component={Places} /> */}
            <Route path="/countries/:country" component={CountryDetail} />
            {/* country detail pages */}
            <Route path="/places/:continents" component={Countries} />
            {/* list of countries */}
            <Route path="/continents" component={Continents} />
            {/* list of continents */}
            <Route path="/logIn" component={LogIn} />
            <Route path="/signUp" component={SignUp} />
          </Switch>
        </Navigation>
      </BrowserRouter>
    );
  }
}

export default App;
