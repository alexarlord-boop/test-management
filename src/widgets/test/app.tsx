import React, { memo } from 'react';


import { useProjects } from './hooks/useProjects';
import ProjectList from './components/ProjectList';
import FlagToggle from './components/FlagToggle';
import useFlag from './hooks/useFlag';

// Register widget in YouTrack. To learn more, see https://www.jetbrains.com/help/youtrack/devportal-apps/apps-host-api.html
const host = await YTApp.register();


const AppComponent: React.FunctionComponent = () => {
 
  const { projects } = useProjects({host});
  const { flag, setFlagValue } = useFlag({host});


  return (
    <div className="widget">

      <FlagToggle checked={flag} onChange={setFlagValue}/>      
      <ProjectList items={projects} />
 
    </div>
  );
};

export const App = memo(AppComponent);
