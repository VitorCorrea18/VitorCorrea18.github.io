import React from 'react';
import { linkedIn, github, gmail } from '../images';
import SocialImage from '../components/socialImage';

class Contact extends React.Component {
  render () {
    return (
      <section className='contact_section'>
        <h2 className='contact_title'>Contact Me</h2>
        <div className='social_div'>
          <SocialImage link='https://www.linkedin.com/in/vitorcorrea18/' image={linkedIn} alt={'LinkedIn'}/>
          <SocialImage link='https://github.com/VitorCorrea18' image={github} alt={'Github'}/>
          <SocialImage link='mailto:vitorcorrea18@gmail.com' image={gmail} alt={'Gmail'}/>
        </div>
      </section>
    );
  }
}

export default Contact;
