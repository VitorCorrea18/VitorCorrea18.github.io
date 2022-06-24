import React from 'react';
import DownloadBtn from '../components/downloadBtn';
import frontEndCv from '../documents/frontEndCv.pdf';
import backEndCv from '../documents/backEndCv.pdf';
import { linkedIn, github, gmail } from '../images/icons';
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
        <div className='contact_download_div'>
          <DownloadBtn name={'Front End CV'} file={frontEndCv} />
          <DownloadBtn name={'Back End CV'} file={backEndCv} />
        </div>
      </section>
    );
  }
}

export default Contact;
