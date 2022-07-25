import React from 'react';
import ProjectCard from '../components/projectCard';
import ApiCard from '../components/apiCard';
import {
  pixelArt, toDoList, trybeWarts, onlineStore, recipeApp,
  starWarsPlanetSearch, trybeTunes, trybeWallet, tryunfo, trivia
} from '../images/projects';
import {
  html, css, js, react, redux, responsive, docker, mysql,
  nodejs, sequelize, JWT, heroku, typescript, jest, mocha
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
            pageUrl='/pixel-art'
            repoUrl='https://github.com/VitorCorrea18/pixel-art'
          />

          <ProjectCard
            projectImg={ toDoList }
            title={'ToDoList'}
            stackUsed={[html, css, js]}
            pageUrl='/todo-list'
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
            pageUrl='/tryunfo-deploy'
            repoUrl='https://github.com/VitorCorrea18/project-tryunfo'
          />

          <ProjectCard
            projectImg={ onlineStore }
            title={'OnlineStore'}
            stackUsed={[react]}
            pageUrl='/online-store-deploy'
            repoUrl='https://github.com/VitorCorrea18/project-online-store'
          />

          <ProjectCard
            projectImg={ trybeTunes }
            title={'TrybeTunes'}
            stackUsed={[react]}
            pageUrl='/TrybeTunes-deploy'
            repoUrl='https://github.com/VitorCorrea18/project-trybetunes'
          />

          <ProjectCard
            projectImg={ trybeWallet }
            title={'TrybeWallet'}
            stackUsed={[react, redux]}
            pageUrl='/TrybeWallet-deploy'
            repoUrl='https://github.com/VitorCorrea18/project-trybewallet'
          />
          <ProjectCard
            projectImg={ starWarsPlanetSearch }
            title={'StarWars P. Search'}
            stackUsed={[react]}
            pageUrl='/Starwars-planets-Deploy'
            repoUrl='https://github.com/VitorCorrea18/project-starwars-planets-search'
          />
          <ProjectCard
            projectImg={ trivia }
            title={'Trivia'}
            stackUsed={[react, redux, responsive]}
            pageUrl='/Trivia-Deploy'
            repoUrl='https://github.com/VitorCorrea18/project-trivia'
          />
          <ProjectCard
            projectImg={ recipeApp }
            title={'Food Station'}
            stackUsed={[react, responsive]}
            pageUrl='/food-station-deploy'
            repoUrl='https://github.com/VitorCorrea18/food-station'
          />
        </section>
        <h2 className='project_page_title'>Back End Projects</h2>
        <section className='project_section'>
          <ApiCard name={'Talker Manager'} stackUsed={[docker, nodejs, mysql]} url='https://github.com/VitorCorrea18/TalkerManager-API' />
          <ApiCard name={'Store Manager'} stackUsed={[docker, nodejs, mysql]} url='https://github.com/VitorCorrea18/store-manager-API' />
          <ApiCard name={'Blogs Api'} stackUsed={[docker, nodejs, mysql, sequelize, JWT]} url='https://github.com/VitorCorrea18/BlogPosts-API' />
          <ApiCard name={'Stranger Things'} stackUsed={[docker, nodejs, mysql, heroku]} url='https://vitorcorrea18-pd.herokuapp.com/' />
          <ApiCard name={'TrybeSmith'} stackUsed={[docker, typescript, nodejs, mysql, JWT]} url='https://github.com/VitorCorrea18/trybesmith-API' />
          <ApiCard name={ "Tryber's and Dragons" } stackUsed={[docker, typescript, nodejs]} url='https://github.com/VitorCorrea18/Trybers-N-Dragons' />
          <ApiCard name={ 'Trybe Futebol Clube' } stackUsed={[docker, typescript, nodejs, mysql, JWT, sequelize, jest, mocha]} url='https://github.com/VitorCorrea18/Trybe-futebol-clube' />
        </section>
      </main>
    );
  }
}

export default Projects;
