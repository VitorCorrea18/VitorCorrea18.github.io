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
        <h2 className='project_page_title'>Front End Projects</h2>
        <section className='project_section'>
          <ProjectCard
            projectImg={ pixelArt }
            title={'PixelArt'}
            stackUsed={[html, css, js]}
            pageUrl='/pixelart'
            repoUrl='https://github.com/VitorCorrea18/pixel-art'
          />

          <ProjectCard
            projectImg={ toDoList }
            title={'ToDoList'}
            stackUsed={[html, css, js]}
            pageUrl='/todolist'
            repoUrl='https://github.com/VitorCorrea18/project-todo-list'
          />

          <ProjectCard
            projectImg={ trybeWarts }
            title={'TrybeWarts'}
            stackUsed={[html, css, js]}
            pageUrl='/trybewarts'
            repoUrl='https://github.com/VitorCorrea18/project-trybewarts'
          />

          <ProjectCard
            projectImg={ tryunfo }
            title={'Tryunfo'}
            stackUsed={[react]}
            pageUrl='/tryunfo'
            repoUrl='https://github.com/VitorCorrea18/project-tryunfo'
          />

          <ProjectCard
            projectImg={ onlineStore }
            title={'OnlineStore'}
            stackUsed={[react]}
            pageUrl='/online-store'
            repoUrl='https://github.com/VitorCorrea18/project-online-store'
          />

          <ProjectCard
            projectImg={ trybeTunes }
            title={'TrybeTunes'}
            stackUsed={[react]}
            pageUrl='/trybetunes'
            repoUrl='https://github.com/VitorCorrea18/project-trybetunes'
          />

          <ProjectCard
            projectImg={ trybeWallet }
            title={'TrybeWallet'}
            stackUsed={[react, redux]}
            pageUrl='/trybewallet'
            repoUrl='https://github.com/VitorCorrea18/project-trybewallet'
          />
          <ProjectCard
            projectImg={ starWarsPlanetSearch }
            title={'StarWars P. Search'}
            stackUsed={[react]}
            pageUrl='/starwars-planet-search'
            repoUrl='https://github.com/VitorCorrea18/project-starwars-planets-search'
          />
          <ProjectCard
            projectImg={ recipeApp }
            title={'Recipe App'}
            stackUsed={[react, responsive]}
            pageUrl='/recipe-app'
            repoUrl='https://github.com/VitorCorrea18/project-recipes-app'
          />
        </section>
        <h2 className='project_page_title'>Back End</h2>
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
