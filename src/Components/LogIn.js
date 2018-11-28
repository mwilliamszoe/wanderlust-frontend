import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

class Login extends Component {
  state = {
    email: "",
    password: "",
    token: null
  };
  handleSubmit = e => {
    e.preventDefault();
    fetch(
      `http://localhost:4000/login?email=${this.state.email}&password=${
        this.state.password
      }`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(r => r.json())
      .then(r => {
        if (r.message) {
          alert(r.message);
        }
        localStorage.setItem("token", r.token);
        this.setState({
          token: r.token
        });
        console.log(this.state);
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
    // console.log(this.state);
    return (
      <div className="login-form">
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={e => this.handleSubmit(e)}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  type="email"
                  onChange={this.handleChange}
                  name="email"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this.handleChange}
                  name="password"
                />

                <Button color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
