import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

const langs = ['C', 'C++', 'Java', 'JavaScript', 'Python'];

class LangSelector2 extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(event, index, value) {
    console.log(`You have selected ${langs[value]}`);
    this.props.onSelect(event, index, value);
  }
  render() {
    return (
      <ButtonToolbar>
        <DropdownButton
          bsStyle={this.props.bsStyle}
          title={this.props.title}
          id="dropdown-basic-1"
          value="2"
          key="2"
          onSelect={this.onSelect}
        >
          {langs.map((lang, index) => (
            <MenuItem key={lang} eventKey={index}>
              {lang}
            </MenuItem>
          ))}
        </DropdownButton>
      </ButtonToolbar>
    );
  }
}

LangSelector2.propTypes = {
  bsStyle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default LangSelector2;
