import React from 'react';
import DownloadBtn from '../components/downloadBtn';
import frontEndCv from '../documents/CV-FrontEnd.pdf';
import backEndCv from '../documents/CV-BackEnd.pdf';

class Intro extends React.Component {
  render () {
    return (
      <article className='intro_article'>
        <h1 className='intro_title'>
          Hello World, 👋 <br/>
          { "I'm Vitor Corrêa,"} <br/>
          Web Developer <br/>
        </h1>
        <p className='intro_paragraph'>Full Stack Web Developer </p>
        <div className='download_div'>
        <DownloadBtn name={'Front End CV'} file={frontEndCv} />
        <DownloadBtn name={'Back End CV'} file={backEndCv} />
        </div>
      </article>
    );
  }
}

export default Intro;
