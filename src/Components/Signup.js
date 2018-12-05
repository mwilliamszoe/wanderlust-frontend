import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

class Signup extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:4000/${this.props.route}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(r => r.json())
      .then(r => {
        if (r.message) {
          alert(r.message);
          // this.props.history.push("/login");
        }
        // console.log(r);
        // debugger;
        localStorage.setItem("token", r.jwt);
        localStorage.setItem("user_id", r.user.id);
        localStorage.setItem("email", r.user.email);
        this.props.setCurrentUser(r);
        this.props.history.push("/profile");
        this.props.setLoggedIn(true);
      });
    e.target.reset();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="login-form">
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
              {this.props.route === "signup"
                ? "Sign-up for a new account"
                : "Login to your account"}
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
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
                  {this.props.route === "signup" ? "Sign-up" : "Login"}
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Signup;
