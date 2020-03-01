import React from 'react';

import './headerstyles.css';

import Modal from './Modal';
import useModal from './useModal';

const Header = () => {
  const { isShowing, toggle } = useModal();
  return (
    <div className='header'>
      <div className='main-info'>
        <h1>I BUILD WEBSITES</h1>
        <h2>Need a new webiste?</h2>
        <button className='button-default' onClick={toggle}>
          Contact me
        </button>
        <Modal isShowing={isShowing} hide={toggle} />
      </div>
    </div>
  );
};

export default Header;
