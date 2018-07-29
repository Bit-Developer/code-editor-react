import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import ok from '../../../../public/images/ok.png';
import error from '../../../../public/images/error.png';

class StatusImage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    if (this.props.hasError) {
      return <Image src={error} rounded />;
    } else if (this.props.message !== '') {
      return <Image src={ok} rounded />;
    }
    return '';
  }
}

StatusImage.propTypes = {
  hasError: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default StatusImage;
