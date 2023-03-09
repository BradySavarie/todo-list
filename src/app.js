import { createProject, projectsList } from './projects';
import { createTask } from './tasks';

createProject('title', 'descripton');
createTask('title', 'description', '01-01-1998', 0, 0, 0);
console.log(projectsList);
