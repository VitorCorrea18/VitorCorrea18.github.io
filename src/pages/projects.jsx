import React from 'react';
import ProjectCard from '../components/projectCard';
import ApiCard from '../components/apiCard';
import {
  pixelArt, toDoList, trybeWarts, onlineStore, recipeApp,
  starWarsPlanetSearch, trybeTunes, trybeWallet, tryunfo
} from '../images/projects';
import {
  html, css, js, react, redux, responsive, docker, mysql,
  nodejs, sequelize, JWT, heroku, typescript
} from '../images/icons';

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
        <h3>Back End</h3>
        <section className='project_section'>
          <ApiCard name={'Talker Manager'} stackUsed={[docker, nodejs, mysql]} url='https://vitorcorrea18.github.io/talker-manager' />
          <ApiCard name={'Store Manager'} stackUsed={[docker, nodejs, mysql]} url='https://vitorcorrea18.github.io/store-manager' />
          <ApiCard name={'Blogs Api'} stackUsed={[docker, nodejs, mysql, sequelize, JWT]} url='https://vitorcorrea18.github.io/blogs-api' />
          <ApiCard name={'Stranger Things'} stackUsed={[docker, nodejs, mysql, heroku]} url='https://vitorcorrea18-pd.herokuapp.com/' />
          <ApiCard name={'TrybeSmith'} stackUsed={[docker, typescript, nodejs, mysql, JWT]} url='https://vitorcorrea18.github.io/trybesmith' />
        </section>
      </main>
    );
  }
}

export default Projects;
