import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavLabel from './components/navLabel';
import { Intro, About, Projects, Contact } from './pages';
import { avatar, menuMobile } from './images/icons';
import './styles/index.css';

class App extends React.Component {
  render () {
    return (
      <Router>
        <main className='body_container'>
        <input type='checkbox' id='open_menu' />
        <label htmlFor='open_menu' className='menu_mobile_label'>
          <img className='menu_mobile_img' src={menuMobile} alt='menu mobile' />
        </label>
        <aside className='menu_aside'>
          <label className='close_menu' htmlFor='open_menu'>X</label>
          <div className='avatar'>
            <img className='avatar_img' src={ avatar } alt='My Avatar' />
            <span className='avatar_name'>Vitor J.V Corrêa</span>
            <br/>
            <span className='avatar_title'>Web Developer</span>
          </div>
          <div className='void'></div>

          <div className='intro'>
            <NavLabel name='Intro' />
          </div>

          <div className='about'><NavLabel name='About' /></div>
          <div className='projects'><NavLabel name='Projects' /></div>
          <div className='contact'><NavLabel name='Contact' /></div>
        </aside>
        <section className='main_page'>
          <Routes>
            <Route exact path="/" element={<Intro />} />
            <Route exact path="/intro" element={<Intro />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </section>
        </main>
      </Router>
    );
  }
}

export default App;
