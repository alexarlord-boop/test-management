import React from "react";

import Toggle from '@jetbrains/ring-ui-built/components/toggle/toggle';
import { Size } from '@jetbrains/ring-ui-built/components/toggle/toggle';

const FlagToggle: React.FC<{checked: boolean; onChange: (checked: boolean) => void;}> = ({ checked, onChange }) => {
    return (
      <div className='wrapper'>
        <Toggle
          help='Mimicking the administration panel'
          size={Size.Size20} 
          checked={checked} 
          onChange={() => onChange(!checked)}>
            Global Flag
        </Toggle> 
      </div>
    );
}

export default FlagToggle;