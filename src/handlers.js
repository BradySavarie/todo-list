import {
    openNewProjectModal,
    openReadProjectModal,
    openDeleteProjectModal,
    openNewTaskModal,
    openReadTaskModal,
    openDeleteTaskModal,
    getProjectFormData,
    getTaskFormData,
} from './UI';
import { projectsList, createProject } from './projects';
import { createTask } from './tasks';

const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');
const createNewProjectForm = document.getElementById('createNewProjectForm');
const createNewTaskForm = document.getElementById('createNewTaskForm');

sidebar.addEventListener('click', (e) => {
    const element = e.target.getAttribute('data-element');

    switch (element) {
        case 'openNewProjectModalBtn':
            openNewProjectModal();
            break;
        case 'openReadProjectModalBtn':
            openReadProjectModal();
            break;
        case 'openDeleteProjectModalBtn':
            openDeleteProjectModal();
            break;
        default:
            console.log('default project message');
    }
});

main.addEventListener('click', (e) => {
    const element = e.target.getAttribute('data-element');

    switch (element) {
        case 'openNewTaskModalBtn':
            openNewTaskModal();
            break;
        case 'openReadTaskModalBtn':
            openReadTaskModal();
            break;
        case 'openDeleteTaskModalBtn':
            openDeleteTaskModal();
            break;
        default:
            console.log('default task message');
    }
});

createNewProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title, description] = getProjectFormData(e.target);
    createProject(title, description);
    console.log(projectsList);
});

createNewTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title, description, dueDate, priority] = getTaskFormData(e.target);
    createTask(title, description, dueDate, priority);
});
