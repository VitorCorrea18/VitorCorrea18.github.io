import React from 'react';
import ProjectCard from '../components/projectCard';
import {
  pixelArt, toDoList, trybeWarts, onlineStore, recipeApp,
  starWarsPlanetSearch, trybeTunes, trybeWallet, tryunfo
} from '../images/projects';
import { html, css, js, react, redux, responsive } from '../images/icons';

class Projects extends React.Component {
  render () {
    return (
      <main className='projects_page'>
        <h3>Front End Projects</h3>
        <section className='project_section'>
          <ProjectCard projectImg={ pixelArt } title={'PixelArt'} stackUsed={[html, css, js]} />
          <ProjectCard projectImg={ toDoList } title={'ToDoList'} stackUsed={[html, css, js]} />
          <ProjectCard projectImg={ trybeWarts } title={'TrybeWarts'} stackUsed={[html, css, js]} />
          <ProjectCard projectImg={ tryunfo } title={'Tryunfo'} stackUsed={[react]} />
          <ProjectCard projectImg={ onlineStore } title={'OnlineStore'} stackUsed={[react]} />
          <ProjectCard projectImg={ trybeTunes } title={'TrybeTunes'} stackUsed={[react]} />
          <ProjectCard projectImg={ trybeWallet } title={'TrybeWallet'} stackUsed={[react, redux]} />
          <ProjectCard projectImg={ starWarsPlanetSearch } title={'StarWars Planet Search'} stackUsed={[react]} />
          <ProjectCard projectImg={ recipeApp } title={'Recipe App'} stackUsed={[react, responsive]} />
        </section>
      </main>
    );
  }
}

export default Projects;
