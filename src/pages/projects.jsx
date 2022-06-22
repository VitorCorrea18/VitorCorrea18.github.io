import React from 'react';
import ProjectCard from '../components/projectCard';
import {
  pixelArt, toDoList, trybeWarts, onlineStore, recipeApp,
  starWarsPlanetSearch, trybeTunes, trybeWallet, tryunfo
} from '../images/projects';

class Projects extends React.Component {
  render () {
    return (
      <main className='projects_page'>
        <section className='project_section'>
          <ProjectCard projectImg={ pixelArt } title={'Pixel Art'} />
          <ProjectCard projectImg={ toDoList } title={'To Do List'} />
          <ProjectCard projectImg={ trybeWarts } title={'Trybe Warts'} />
          <ProjectCard projectImg={ onlineStore } title={'Online Store'} />
          <ProjectCard projectImg={ recipeApp } title={'Recipe App'} />
          <ProjectCard projectImg={ starWarsPlanetSearch } title={'Planet Search'} />
          <ProjectCard projectImg={ trybeTunes } title={'Trybe Tunes'} />
          <ProjectCard projectImg={ trybeWallet } title={'Trybe Wallet'} />
          <ProjectCard projectImg={ tryunfo } title={'Tryunfo'} />
        </section>
      </main>
    );
  }
}

export default Projects;
