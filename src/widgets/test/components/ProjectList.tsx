import React, { useContext } from 'react';
import Avatar from '@jetbrains/ring-ui-built/components/avatar/avatar';

import { Project } from '../common';

import './components.css';


const ProjectList: React.FC<{ items: Project[] }> = ({ items }) => {

  return (
    
    <ul className='wrapper'>
      {items.map(project => (
        <li key={project.id} className='project-list__item'>
          <div className="avatar-demo-cell" style={{height: '40px'}}>
            <Avatar size={40} url={project.iconUrl} />
          </div>
          <strong style={{marginRight: 'auto'}}  data-test='ring-link'>{project.name}</strong>
        </li>
      ))}
    </ul>
    
  );
};



export default ProjectList;
