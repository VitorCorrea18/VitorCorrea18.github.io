import React from 'react';
import propTypes from 'prop-types';

class NavLabel extends React.Component {
  render () {
    const { name } = this.props;

    return (
      <label className='nav_label'>{ name }</label>
    );
  }
};

NavLabel.propTypes = {
  name: propTypes.string.isRequired
};

export default NavLabel;
