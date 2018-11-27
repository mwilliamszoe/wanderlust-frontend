import React, { Component } from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";

class Profile extends Component {
  state = {
    title: "",
    mood: "",
    country_id: "",
    countries: []
  };

  componentDidMount = () => {
    fetch("http://localhost:4000/countries")
      .then(r => r.json())
      .then(countries => {
        this.setState({
          countries
        });
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:4000/experiences", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        mood: this.state.mood,
        country_id: this.state.country_id
      })
    });
    e.target.reset();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const countryOptions = [
      { key: "af", value: "af", flag: "af", text: "Afghanistan" }
    ];

    const countryNames = this.state.countries.map(country => {
      return { text: country.name };
    });
    console.log(countryNames);
    return (
      <div>
        <h2>Submit a new adventure</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input
              placeholder="Title"
              onChange={this.handleChange}
              name="title"
            />
          </Form.Field>
          <Form.Field>
            <label>Type</label>
            <input
              placeholder="Type"
              onChange={this.handleChange}
              name="mood"
            />
          </Form.Field>
          <Form.Field>
            <label>Country</label>
            {/* <input
              placeholder="Country"
              onChange={this.handleChange}
              name="country_id"
            /> */}
            <Dropdown
              placeholder="Select Country"
              fluid
              search
              selection
              options={countryNames}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Profile;
