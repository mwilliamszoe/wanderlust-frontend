import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";

class NewExperienceForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      mood: "",
      country_id: "",
      country_name: "",
      countries: []
    };
  }

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
    // debugger;
    e.preventDefault();
    fetch("http://localhost:4000/experiences", {
      method: "POST",
      headers: {
        // Authorization: "Bearer token",
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        // mood: this.state.mood,
        country_id: this.state.countries.filter(c => {
          return c.name === this.state.country_name;
        })[0].id
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
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Title</label>
            <input
              placeholder="Title"
              onChange={this.handleChange}
              name="title"
            />
          </Form.Field>
          {/* <Form.Field>
            <label>Type</label>
            <input
              placeholder="Type"
              onChange={this.handleChange}
              name="mood"
            />
          </Form.Field> */}
          <Form.Field>
            <label>Country</label>
            <Input
              list="countries"
              placeholder="Choose country..."
              onChange={this.handleChange}
              name="country_name"
              id="countries-input"
            />
            <datalist id="countries">{countryOptions}</datalist>
          </Form.Field>
          <Button type="submit" color="teal">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default NewExperienceForm;
