import React from 'react';
import './styles/index.css';

class App extends React.Component {
  render () {
    return (
      <body className='body_container'>
      <aside className='menu_aside'>
        <div className='avatar'>avatar</div>
        <div className='void'>void</div>
        <div className='about'>about</div>
        <div className='projects'>projects</div>
        <div className='contact'>contact</div>
      </aside>
      <main className='main_page'>
      <h1>OLÁ MUNDO</h1>
      </main>
      </body>
    );
  }
}

export default App;
