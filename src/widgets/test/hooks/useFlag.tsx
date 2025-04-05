import { useState, useEffect } from 'react';
import { HostAPI } from '../../../../@types/globals';
import { FlagResponse } from '../common';


const useFlag = ({host}: {host: HostAPI}) => {
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        let isMounted = true;
        const fetchFlag = async () => {
          try {
            const data = await host.fetchApp(`backend/flag`, {method: 'GET'}) as FlagResponse;

            if (isMounted) {
                setFlag(data.flag);
            }
          } catch (error) {
            console.error('Error fetching flag:', error);
          }
        };
        fetchFlag();

        return () => {
          isMounted = false;
        };
      }, [host]);

      
      const setFlagValue = async (newFlagValue: boolean) => {
        try {
            const data = await host.fetchApp(`backend/flag`, {
                method: 'POST', 
                body: { flag: newFlagValue }
            }) as FlagResponse;
            setFlag(data.flag);
            host.alert(`Flag updated to ${data.flag}`);
        } catch (error) {
          console.error('Error updating flag:', error);
          host.alert('Error updating flag');
        }
      };

    return { flag, setFlagValue };

}

export default useFlag;