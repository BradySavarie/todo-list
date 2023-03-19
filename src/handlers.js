import {
    openNewProjectModal,
    closeNewProjectModal,
    openProjectView,
    openDeleteProjectModal,
    openNewTaskModal,
    closeNewTaskModal,
    openReadTaskModal,
    openDeleteTaskModal,
    renderNewProjectCard,
    renderNewTaskCard,
    toggleView,
} from './UI';
import {
    projectsList,
    setActiveProject,
    getActiveProjectIndex,
    createProject,
    getProjectFormData,
} from './projects';
import { createTask, getTaskFormData } from './tasks';

const projectsPage = document.getElementById('projectsPage');
const openNewProjectModalBtn = document.getElementById(
    'openNewProjectModalBtn'
);
const closeNewProjectModalBtn = document.getElementById(
    'closeNewProjectModalBtn'
);
const openNewTaskModalBtn = document.getElementById('openNewTaskModalBtn');
const closeNewTaskModalBtn = document.getElementById('closeNewTaskModalBtn');
const openProjectViewBtn = document.getElementById('openProjectViewBtn');
const main = document.getElementById('main');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const createNewProjectForm = document.getElementById('createNewProjectForm');
const createNewTaskForm = document.getElementById('createNewTaskForm');

projectsPage.addEventListener('click', (e) => {
    const projectsIndex = e.target.getAttribute('data-projectsIndex');

    if (projectsIndex) {
        setActiveProject(projectsList[projectsIndex], projectsIndex);
    }
});

/* 
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
}); */

nav.addEventListener('click', (e) => {
    toggleView(e.target);
});

createNewProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title, description] = getProjectFormData(e.target);
    createProject(title, description);
    setActiveProject(
        projectsList[projectsList.length - 1],
        projectsList.length - 1
    );
    closeNewProjectModal();
    renderNewProjectCard(title, projectsList.length - 1);
});

createNewTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title, description, dueDate, priority] = getTaskFormData(e.target);
    const index = getActiveProjectIndex();
    createTask(title, description, dueDate, priority, index);
    renderNewTaskCard();
});

overlay.addEventListener('click', () => {
    closeNewProjectModal();
    closeNewTaskModal();
});

openNewProjectModalBtn.addEventListener('click', () => {
    openNewProjectModal();
});

closeNewProjectModalBtn.addEventListener('click', () => {
    closeNewProjectModal();
});

openProjectViewBtn.addEventListener('click', () => {
    openProjectView();
});

openNewTaskModalBtn.addEventListener('click', () => {
    openNewTaskModal();
});

closeNewTaskModalBtn.addEventListener('click', () => {
    closeNewTaskModal();
});
