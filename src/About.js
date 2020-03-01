import React from 'react';
import './about.css';

// import mac from '../src/assets/images/mac.svg';
import jslogo from '../src/assets/images/javascript.svg';
import htmllogo from '../src/assets/images/html5.svg';
import reactlogo from '../src/assets/images/react.svg';

const About = () => {
  return (
    <div style={{ backgroundColor: '#fff8f6' }}>
      <div className='container'>
        <div className='about'>
          <h1>What I'm learning...</h1>
        </div>
      </div>
      <div className='cards'>
        <div className='card1'>
          <p>REACT</p>
          <hr />
          {reactlogo1}
        </div>
        <div className='card2'>
          <p>JAVASCRIPT</p>
          <hr />
          {Javaslogo}
        </div>
        <div className='card3'>
          <p>HTML5</p>
          <hr />
          {htmllogo1}
        </div>
      </div>
    </div>
  );
};

// const macImage = (
//   <img
//     src={mac}
//     alt='mac'
//     style={{ height: '250px', width: '250px', marginTop: '50px' }}
//   />
// );
const Javaslogo = (
  <img
    src={jslogo}
    alt='jslogo'
    id='logo1'
    style={{ height: '180px', width: '160px', marginTop: '50px' }}
  />
);
const htmllogo1 = (
  <img
    src={htmllogo}
    alt='html'
    id='logo2'
    style={{
      height: '180px',
      width: '160px',
      color: 'white',
      marginTop: '50px'
    }}
  />
);
const reactlogo1 = (
  <img
    src={reactlogo}
    alt='react'
    id='logo3'
    style={{
      height: '180px',
      width: '160px',
      color: 'white',
      marginTop: '70px'
    }}
  />
);

export default About;
