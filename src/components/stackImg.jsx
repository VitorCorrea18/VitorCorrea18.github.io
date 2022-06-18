import React from 'react';
import propTypes from 'prop-types';
import './stackImage.css';

class StackImg extends React.Component {
  render () {
    const { image, name } = this.props;
    return (
      <div className='img_div'>
        <img className='stack_img' src={image} alt={ `${name} image` } />
        <span className='img_name'>{name}</span>
      </div>
    );
  }
};

StackImg.propTypes = {
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired
};

export default StackImg;
