import React from 'react';
import propTypes from 'prop-types';
import { api } from '../images/icons';
import './apiCard.css';

class ApiCard extends React.Component {
  render () {
    const { name, stackUsed, url } = this.props;
    return (
      <a className='api_link' href={url} target="_blank" rel="noreferrer" >
        <div className='api_card_div'>
          <div className='api_img_div'>
            <img className='api_img' src={api} alt='api image' />
          </div>
          <div className='api_info_div'>
            <h3 className='api_title'>{name}</h3>
            <div className='api_stack_div'>
              {
                stackUsed.map((stack) => <img key={stack} className='api_stackUsed' src={stack} alt='stack img' />)
              }
            </div>
          </div>
        </div>
      </a>
    );
  }
}

ApiCard.propTypes = {
  name: propTypes.string.isRequired,
  stackUsed: propTypes.instanceOf(Array).isRequired,
  url: propTypes.string.isRequired
};

export default ApiCard;
