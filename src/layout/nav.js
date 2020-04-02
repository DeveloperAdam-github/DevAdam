import React from 'react';

import Router from '../Router';
import { Link } from 'react-scroll';
import './nav.css';

const Nav = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='links'>
          <div className='grow'>
            <Link
              activeClass='true'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{
                marginRight: '20px',
                color: 'black',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out'
              }}
              to='header'
            >
              Home
            </Link>
          </div>
          <div className='grow'>
            <Link
              activeClass='true'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{
                marginRight: '20px',
                color: 'black',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              to='about'
            >
              About
            </Link>
          </div>

          <div className='grow'>
            <Link
              activeClass='true'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{
                marginRight: '20px',
                color: 'black',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              to='projects-title'
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
