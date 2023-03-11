import './styles.css';
import './handlers';
import { createProject, projectsList } from './projects';
import { createTask } from './tasks';

createProject(
    'Default Project',
    'This project is created during the initial load up'
);
createTask(
    'Default Task',
    'This task is created during the initial load up',
    '01-01-1998',
    0,
    0,
    0
);
console.log(projectsList);
