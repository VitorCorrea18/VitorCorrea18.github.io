import React from 'react';

class Intro extends React.Component {
  render () {
    return (
      <article className='intro_article'>
        <h1 className='intro_title'>
          Hello World, 👋 <br/>
          { "I'm Vitor Corrêa,"} <br/>
          Web Developer <br/>
        </h1>
        <p className='intro_paragraph'>Front End Web Developer / Future Full Stack Web Developer </p>
      </article>
    );
  }
}

export default Intro;
