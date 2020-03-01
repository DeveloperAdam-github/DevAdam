import React from 'react';
import './Footer.css';

import Facebook from './assets/images/facebook.svg';
import Twitter from './assets/images/twitter.svg';
import Instagram from './assets/images/instagram.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <p className='copyright' style={{ paddingLeft: '50px' }}>
        Copyright 2020 Developer Adam
      </p>
      <ul className='sociallist'>
        <li>
          <a href='https://www.facebook.com/DeveloperAdam1'>{fblogo}</a>
        </li>
        <li>
          <a href='https://twitter.com/developeradam_/'>{twitterlogo}</a>
        </li>
        <li>
          <a href='https://www.instagram.com/developeradam/'>{instalogo}</a>
        </li>
      </ul>
    </div>
  );
};

const fblogo = (
  <img
    src={Facebook}
    alt='mac'
    style={{ height: '40px', width: '40px', marginTop: '50px' }}
  />
);
const twitterlogo = (
  <img
    src={Twitter}
    alt='mac'
    style={{ height: '40px', width: '40px', marginTop: '50px' }}
  />
);
const instalogo = (
  <img
    src={Instagram}
    alt='mac'
    style={{ height: '40px', width: '40px', marginTop: '50px' }}
  />
);

export default Footer;
