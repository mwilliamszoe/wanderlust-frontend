import React from "react";
import { Button, Form } from "semantic-ui-react";

const Profile = props => {
  return (
    <div>
      <h1>Profile page!!!!!!</h1>
      <h2>Submit a new adventure</h2>
      <Form>
        <Form.Field>
          <label>Title</label>
          <input placeholder="Title" />
        </Form.Field>{" "}
        <Form.Field>
          <label>Type</label>
          <input placeholder="type" />
        </Form.Field>{" "}
        <Form.Field>
          <label>Country</label>
          <input placeholder="Country" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      {props.children}
    </div>
  );
};

export default Profile;
