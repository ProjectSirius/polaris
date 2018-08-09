import React, { Component } from 'react';
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

class btnGroup extends Component {
  render() {
    return (
      <ButtonGroup>
        <Button>
          <Glyphicon glyph="th-large" />
        </Button>
        <Button>
          <Glyphicon glyph="th-list" />
        </Button>
        <Button>Map</Button>
      </ButtonGroup>
    );
  }
}

export default btnGroup;
