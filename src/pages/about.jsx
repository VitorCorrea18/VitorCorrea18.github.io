import React from 'react';
import StackImg from '../components/stackImg';
import {
  git, linux, html, css, js, react, redux, docker,
  mysql, nodejs, typescript, mongoDb, sequelize, JWT, python, heroku
} from '../images';

class About extends React.Component {
  render () {
    return (
      <article className='about_article'>
        <h2 className='about_title'>A little about me</h2>
        <p className='about_paragraph'>
          { 'I have always been pasionate about computers,' } <br/>
          { 'and during the COVID 19 quarantine I decided to start a new journey,' } <br/>
          { "a jouney that would lead me to finally work with what i'm passionate about." } <br/>
        </p>
        <p className='about_paragraph'>
          { "I started my studies almost an year ago and i want to show you what i've learned so far." }
        </p>
        <section className='stack_section'>
          <h3 className='stack_title'>My Current Development Stack</h3>
          <div className='stack_div current_stack'>
            <StackImg name='Git' image={ git } />
            <StackImg name='Linux' image={ linux } />
            <StackImg name='HTML' image={ html } />
            <StackImg name='CSS' image={ css } />
            <StackImg name='Javascript' image={ js } />
            <StackImg name='React' image={ react } />
            <StackImg name='Redux' image={ redux } />
            <StackImg name='Docker' image={ docker } />
          </div>
          <h3 className='stack_title'>{ "Stack I'm currently studying" }</h3>
          <div className='stack_div'>
            <StackImg name='Nodejs' image={ nodejs } />
            <StackImg name='Mysql' image={ mysql } />
            <StackImg name='Sequelize' image={ sequelize } />
            <StackImg name='JWT' image={ JWT } />
            <StackImg name='Heroku' image={ heroku } />
            <StackImg name='Typescript' image={ typescript } />
            <StackImg name='MongoDb' image={ mongoDb } />
            <StackImg name='Python' image={ python } />
          </div>
        </section>
      </article>
    );
  }
}

export default About;
