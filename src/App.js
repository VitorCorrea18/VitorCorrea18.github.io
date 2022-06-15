import React from 'react';
import './styles/index.css';
import NavLabel from './components/navLabel';

class App extends React.Component {
  render () {
    return (
      <main className='body_container'>
      <aside className='menu_aside'>
        <label className='close_menu'>X</label>
        <div className='avatar'>avatar</div>
        <div className='void'></div>
        <div className='intro'><NavLabel name='Intro' /></div>
        <div className='about'><NavLabel name='About me' /></div>
        <div className='projects'><NavLabel name='Projects' /></div>
        <div className='contact'><NavLabel name='Contact' /></div>
      </aside>
      <section className='main_page'>
      <h1>OLÁ MUNDO</h1>
      </section>
      </main>
    );
  }
}

export default App;
