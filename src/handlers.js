import {
    openNewProjectModal,
    closeNewProjectModal,
    openUpdateProjectModal,
    closeUpdateProjectModal,
    openNewTaskModal,
    updateNewTaskModal,
    closeNewTaskModal,
    renderProjectCards,
    renderTaskCards,
    toggleView,
} from './UI';
import { projectsList, createProject, getProjectFormData } from './projects';
import { createTask, getTaskFormData } from './tasks';

// DOM Selections
const openNewProjectModalBtn = document.getElementById(
    'openNewProjectModalBtn'
);
const closeNewProjectModalBtn = document.getElementById(
    'closeNewProjectModalBtn'
);
const closeUpdateProjectModalBtn = document.getElementById(
    'closeUpdateProjectModalBtn'
);
const projectsScroller = document.getElementById('projectsScroller');
const openNewTaskModalBtn = document.getElementById('openNewTaskModalBtn');
const closeNewTaskModalBtn = document.getElementById('closeNewTaskModalBtn');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');
const createNewProjectForm = document.getElementById('createNewProjectForm');
const createNewTaskForm = document.getElementById('createNewTaskForm');

// Event Listeners
nav.addEventListener('click', (e) => {
    renderProjectCards();
    renderTaskCards();
    toggleView(e.target);
});

createNewProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title] = getProjectFormData(e.target);
    createProject(title);
    updateNewTaskModal();
    closeNewProjectModal();
    renderProjectCards();
});

createNewTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [projectId, title, dueDate, priority] = getTaskFormData(e.target);
    createTask(projectId, title, dueDate, priority);
    closeNewTaskModal();
    renderTaskCards();
});

overlay.addEventListener('click', () => {
    closeNewProjectModal();
    closeNewTaskModal();
    closeUpdateProjectModal();
});

openNewProjectModalBtn.addEventListener('click', () => {
    openNewProjectModal();
});

closeNewProjectModalBtn.addEventListener('click', () => {
    closeNewProjectModal();
});

openNewTaskModalBtn.addEventListener('click', () => {
    openNewTaskModal();
});

closeNewTaskModalBtn.addEventListener('click', () => {
    closeNewTaskModal();
});

projectsScroller.addEventListener('click', (e) => {
    const target = e.target.closest('[data-projectKey]');
    if (e.target.id === 'openUpdateProjectModalBtn') {
        openUpdateProjectModal(target.dataset.projectkey);
    }
});

closeUpdateProjectModalBtn.addEventListener('click', () => {
    closeUpdateProjectModal();
});
