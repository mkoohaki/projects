import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import {projects} from './projectList';
import ApecificProject from './project';

function Greeting() {
  return (
  <section className='projectList'>
    {
      projects.map((project, index) => {
        return <ApecificProject key={index} {...project}></ApecificProject>
      })
    }
  </section>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));

