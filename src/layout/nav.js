import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='links'>
          <div className='grow'>
            <Link
              style={{
                marginRight: '20px',
                color: 'black',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
              }}
              to='/'
            >
              Home
            </Link>
          </div>
          <div className='grow'>
            <Link
              style={{
                marginRight: '20px',
                color: 'black',
                textDecoration: 'none'
              }}
              to='/'
            >
              About
            </Link>
          </div>
          <div className='grow'>
            <Link
              style={{
                marginRight: '20px',
                color: 'black',
                textDecoration: 'none'
              }}
              to='/'
            >
              Contact
            </Link>
          </div>
          <div className='grow'>
            <Link
              style={{
                marginRight: '20px',
                color: 'black',
                textDecoration: 'none'
              }}
              to='/'
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
