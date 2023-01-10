import React from "react";
import { Card, Image, Button } from "semantic-ui-react";

const RegisteredUser = ({ user }) => (
  <Card>
    <Card.Content>
      <Image
        floated="right"
        size="mini"
        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
      />
      <Card.Header>{user.name}</Card.Header>
      <Card.Meta>{user.Address}</Card.Meta>
      <Card.Description>{user.Email}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button primary>Edit</Button>
      <Button negative>Delete</Button>
    </Card.Content>
  </Card>
);

export default RegisteredUser;
