import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

const Header = () => (
  <div>
    <div className="container">
      <h2>React App - Online Code Editor</h2>
      <ButtonToolbar>
        <Button bsStyle="info" href="/">
          Home
        </Button>
        <Button bsStyle="info" href="/editor">
          Code Editor
        </Button>
      </ButtonToolbar>
    </div>
    <hr />
  </div>
);

export default Header;
