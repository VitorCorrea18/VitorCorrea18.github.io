import React from 'react';
import propTypes from 'prop-types';
import { download } from '../images/icons';
import './DownloadBtn.css';

class DownloadBtn extends React.Component {
  render () {
    const { name, file } = this.props;
    const fileName = name.replace(/ {1}/, '').replace(/ {1}/, '');
    return (
      <a className='download_link' href={file} download={fileName}>
        <button className='download_btn' type="button">
          <img className='download_img' src={download} alt='download' />
          {name}
        </button>
      </a>
    );
  }
}

DownloadBtn.propTypes = {
  name: propTypes.string.isRequired,
  file: propTypes.string.isRequired
};

export default DownloadBtn;
