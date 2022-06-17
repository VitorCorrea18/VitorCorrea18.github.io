import React from 'react';
import propTypes from 'prop-types';

class ProjectCard extends React.Component {
  render () {
    const { projectImg, title } = this.props;
    return (
      <div className='project_div'>
        <img className='project_img' src={projectImg} alt={`${title} image`} />
        <h3 className='project_title'>{ title }</h3>
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
