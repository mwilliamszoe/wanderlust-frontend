import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";

class Profile extends Component {
  state = {
    title: "",
    mood: "",
    country_name: "",
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
        country_name: this.state.country_name
      })
    });
    e.target.reset();
  };

  handleChange = event => {
    // debugger;
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const countryOptions = this.state.countries.map((country, idx) => {
      return <option value={country.name} key={idx} id={country.id} />;
    });
    console.log(countryOptions);
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
            {/* <Dropdown
              placeholder="Select Country"
              fluid
              search
              selection
              options={countryOptions}
            /> */}
            <Input
              list="countries"
              placeholder="Choose country..."
              onChange={this.handleChange}
              name="country_name"
            />
            <datalist id="countries">{countryOptions}</datalist>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Profile;
