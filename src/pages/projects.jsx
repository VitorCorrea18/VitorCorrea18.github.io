import React from 'react';
import ProjectCard from '../components/projectCard';
import { pixelArt } from '../images/projects';

class Projects extends React.Component {
  render () {
    return (
      <main className='projects_page'>
        <section className='project_section'>
          <ProjectCard projectImg={ pixelArt } title={'Pixel Art'} />
          <ProjectCard projectImg={ pixelArt } title={'Pixel Art'} />
          <ProjectCard projectImg={ pixelArt } title={'Pixel Art'} />
          <ProjectCard projectImg={ pixelArt } title={'Pixel Art'} />
          <ProjectCard projectImg={ pixelArt } title={'Pixel Art'} />
          <ProjectCard projectImg={ pixelArt } title={'Pixel Art'} />
          <ProjectCard projectImg={ pixelArt } title={'Pixel Art'} />
        </section>
      </main>
    );
  }
}

export default Projects;
