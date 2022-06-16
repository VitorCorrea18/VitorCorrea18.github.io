import React from 'react';
import propTypes from 'prop-types';

class SocialImage extends React.Component {
  render () {
    const { link, image, alt } = this.props;
    return (
      <a href={ link } rel="noreferrer" target='_blank'>
        <img className='social_img' src={ image } alt={ `${alt} link` } />
      </a>
    );
  }
};

SocialImage.propTypes = {
  link: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  alt: propTypes.string.isRequired
};

export default SocialImage;
