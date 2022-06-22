import React from 'react';
import propTypes from 'prop-types';
import Button from '../components/button';
import './projectCard.css';

class ProjectCard extends React.Component {
  render () {
    const { projectImg, title, stackUsed, pageUrl, repoUrl } = this.props;
    return (
        <div className='project_div'>
          <img className='project_img' src={projectImg} alt={`${title} image`} />
          <div className='project_info_div'>
            <h3 className='project_title'>{ title }</h3>
            <div className='stackUsed_div'>
              {
                stackUsed.map((stack) => {
                  return <img key={stack} className='stack_used' src={stack} alt='stack used' />;
                })
              }
            </div>
            <div className='btns_div'>
              <Button content={ 'See it Running' } url={`http://vitorcorrea18.github.io${pageUrl}`} />
              <Button content={ 'Github Repo' } url={repoUrl}/>
            </div>
          </div>
        </div>
    );
  }
}

ProjectCard.propTypes = {
  projectImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  about: propTypes.string.isRequired,
  stackUsed: propTypes.instanceOf(Array).isRequired,
  pageUrl: propTypes.string.isRequired,
  repoUrl: propTypes.string.isRequired
};

export default ProjectCard;
