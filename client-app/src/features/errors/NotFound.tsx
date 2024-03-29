import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
  return (
    <Segment>
      <Header>
        <Icon name="search" />
        Not Found :|
      </Header>
      <Segment.Inline>
        <Button as={Link} to="/activities">
          Return to activities page
        </Button>
      </Segment.Inline>
    </Segment>
  );
}
