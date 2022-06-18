import React from 'react';
import propTypes from 'prop-types';
import Button from '../components/button';
import './projectCard.css';

class ProjectCard extends React.Component {
  render () {
    const { projectImg, title } = this.props;
    return (
        <div className='project_div'>
          <img className='project_img' src={projectImg} alt={`${title} image`} />
          <div className='project_info_div'>
            <h3 className='project_title'>{ title }</h3>
            <div className='btns_div'>
              <Button content={ 'See it Running' } url='http://www.google.com' />
              <Button content={ 'Github Repo' } />
            </div>
          </div>
        </div>
    );
  }
}

ProjectCard.propTypes = {
  projectImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  about: propTypes.string.isRequired
};

export default ProjectCard;
