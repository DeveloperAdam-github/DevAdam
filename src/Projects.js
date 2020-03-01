import React from 'react';

import './Projects.css';

const Projects = () => {
  return (
    <div className='projectscontainer'>
      <div className='projects-title'>
        <h1>These are my projects</h1>
      </div>
      <div className='projectsdisplay'>
        <a
          href='https://developeradam.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='project1'>
            <p></p>
          </div>
        </a>
        <a
          href='https://githubuserfinder12345.netlify.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='project2'>
            <p> </p>
          </div>
        </a>
        <div className='project3'>
          <p>PROJECT 3</p>
        </div>
        <div className='project4'>
          <p>PROJECT 4</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
