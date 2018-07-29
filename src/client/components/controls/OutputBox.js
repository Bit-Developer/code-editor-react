import React from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';

class OutputBox extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    if (this.props.show) {
      return (
        <FormControl
          name="code"
          type="textarea"
          componentClass="textarea"
          rows="8"
          readOnly
          value={this.props.message}
        />
      );
    }

    return (
      <FormControl
        name="code"
        type="textarea"
        componentClass="textarea"
        rows="8"
        readOnly
        value=""
      />
    );
  }
}

OutputBox.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default OutputBox;
