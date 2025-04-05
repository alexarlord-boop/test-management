import { useEffect, useState } from 'react';
import { Project } from '../common';
import { HostAPI } from '../../../../@types/globals';

const useProjects = ({host}: {host: HostAPI}) => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projects: Project[] = await host.fetchYouTrack(
                    'admin/projects', 
                    {
                        query: {fields: 'id,name,shortName,createdBy(login,name,id),leader(login,name,id),iconUrl,key'}
                    }
                );
                setProjects(projects);
            } catch (err) {
                console.error('Error fetching projects:', err);
                host.alert('Error fetching projects');
                setProjects([]);
            }
        };
        fetchProjects();
    }, [host]);

    return { projects };
}

export default useProjects ;