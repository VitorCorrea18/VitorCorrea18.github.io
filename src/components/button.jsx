import React from 'react';
import propTypes from 'prop-types';

class Button extends React.Component {
  render () {
    const { content, url } = this.props;
    return (
      <a className='btn_link' href={url} rel="noreferrer" target='_blank'>
        <label className='button'>{ content }</label>
      </a>
    );
  }
}

Button.propTypes = {
  content: propTypes.string.isRequired,
  url: propTypes.string.isRequired
};

export default Button;
