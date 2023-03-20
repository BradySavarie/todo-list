import './styles.css';
import './handlers';
import { createProject, projectsList } from './projects';
import { createTask } from './tasks';
import { renderProjects } from './UI';

createProject(
    'Default Project',
    'This project is created during the initial load up'
);
createTask(`${projectsList[0].id}`, 'Default Task', '01-01-1998', 'medium');
console.log(projectsList);
renderProjects();
