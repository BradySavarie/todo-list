import {
    openNewProjectModal,
    closeNewProjectModal,
    openProjectView,
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
    getActiveProject,
    getActiveProjectIndex,
    createProject,
    getProjectFormData,
} from './projects';
import { createTask, getTaskFormData } from './tasks';

const openNewProjectModalBtn = document.getElementById(
    'openNewProjectModalBtn'
);
const closeNewProjectModalBtn = document.getElementById(
    'closeNewProjectModalBtn'
);
const openNewTaskModalBtn = document.getElementById('openNewTaskModalBtn');
const closeNewTaskModalBtn = document.getElementById('closeNewTaskModalBtn');
const openProjectViewBtn = document.getElementById('openProjectViewBtn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const createNewProjectForm = document.getElementById('createNewProjectForm');
const createNewTaskForm = document.getElementById('createNewTaskForm');

nav.addEventListener('click', (e) => {
    toggleView(e.target);
});

createNewProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title, description] = getProjectFormData(e.target);
    createProject(title, description);
    const index = projectsList.length - 1;
    setActiveProject(projectsList[index], index);
    closeNewProjectModal();
    renderNewProjectCard(title, index);
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
