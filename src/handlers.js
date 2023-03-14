import {
    openNewProjectModal,
    openReadProjectModal,
    openDeleteProjectModal,
    openNewTaskModal,
    openReadTaskModal,
    openDeleteTaskModal,
    renderNewProjectCard,
    renderNewTaskCard,
} from './UI';
import {
    projectsList,
    setActiveProject,
    getActiveProjectIndex,
    createProject,
    getProjectFormData,
} from './projects';
import { createTask, getTaskFormData } from './tasks';

const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');
const createNewProjectForm = document.getElementById('createNewProjectForm');
const createNewTaskForm = document.getElementById('createNewTaskForm');

sidebar.addEventListener('click', (e) => {
    const element = e.target.getAttribute('data-element');
    const projectsIndex = e.target.getAttribute('data-projectsIndex');

    if (element) {
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
    } else if (projectsIndex) {
        setActiveProject(projectsList[projectsIndex], projectsIndex);
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
    setActiveProject(
        projectsList[projectsList.length - 1],
        projectsList.length - 1
    );
    renderNewProjectCard(projectsList.length - 1);
});

createNewTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title, description, dueDate, priority] = getTaskFormData(e.target);
    const index = getActiveProjectIndex();
    createTask(title, description, dueDate, priority, index);
    renderNewTaskCard();
});
