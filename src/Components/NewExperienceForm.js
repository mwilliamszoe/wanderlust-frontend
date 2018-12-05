import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";

class NewExperienceForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
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
    e.preventDefault();
    fetch("http://localhost:4000/experiences", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        country_id: this.state.countries.find(c => {
          return c.name === this.state.country_name;
        }).id,
        user_id: parseInt(localStorage.getItem("user_id"))
      })
    }).then(() => {
      fetch("http://localhost:4000/experiences")
        .then(r => r.json())
        .then(response => {
          this.props.resetExperiences(response);
        });
    });
    e.target.reset();
    this.props.history.push("/experience-list");
  };

  handleChange = event => {
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
