import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NavLabel extends React.Component {
  render () {
    const { name } = this.props;

    return (
      <Link className='nav_link' to={ `/${name}` }>
        <label className='nav_label'>{ name }</label>
      </Link>
    );
  }
};

NavLabel.propTypes = {
  name: propTypes.string.isRequired
};

export default NavLabel;
