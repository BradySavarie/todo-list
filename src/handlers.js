import {
    openNewProjectModal,
    closeNewProjectModal,
    openUpdateProjectModal,
    closeUpdateProjectModal,
    openNewTaskModal,
    closeNewTaskModal,
    updateNewTaskModal,
    renderProjectCards,
    renderTaskCards,
    toggleView,
} from './UI';
import {
    projectsList,
    createProject,
    updateProject,
    getProjectFormData,
    getUpdateProjectFormData,
} from './projects';
import { createTask, updateCompletedStatus, getTaskFormData } from './tasks';

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
const openNewTaskModalBtn = document.getElementById('openNewTaskModalBtn');
const closeNewTaskModalBtn = document.getElementById('closeNewTaskModalBtn');
const createNewProjectForm = document.getElementById('createNewProjectForm');
const updateProjectForm = document.getElementById('updateProjectForm');
const createNewTaskForm = document.getElementById('createNewTaskForm');
const projectsScroller = document.getElementById('projectsScroller');
const tasksContainer = document.getElementById('tasksContainer');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

// Event Listeners

createNewProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title] = getProjectFormData(e.target);
    createProject(title);
    updateNewTaskModal();
    closeNewProjectModal();
    renderProjectCards();
});

openNewProjectModalBtn.addEventListener('click', () => {
    openNewProjectModal();
});

closeNewProjectModalBtn.addEventListener('click', () => {
    closeNewProjectModal();
});

closeUpdateProjectModalBtn.addEventListener('click', () => {
    closeUpdateProjectModal();
});

openNewTaskModalBtn.addEventListener('click', () => {
    openNewTaskModal();
});

closeNewTaskModalBtn.addEventListener('click', () => {
    closeNewTaskModal();
});

updateProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title, projectId] = getUpdateProjectFormData(e.target);
    updateProject(title, projectId);
    closeUpdateProjectModal();
    renderProjectCards();
});

createNewTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [projectId, title, dueDate, priority] = getTaskFormData(e.target);
    createTask(projectId, title, dueDate, priority);
    closeNewTaskModal();
    renderTaskCards();
});

projectsScroller.addEventListener('click', (e) => {
    const target = e.target.closest('[data-projectKey]');
    if (e.target.id === 'openUpdateProjectModalBtn') {
        openUpdateProjectModal(target.dataset.projectkey);
    } else if (e.target.matches('input')) {
        const task = e.target.closest('[data-taskKey]');
        updateCompletedStatus(task.dataset.taskkey);
        renderProjectCards();
    }
});

tasksContainer.addEventListener('click', (e) => {
    const target = e.target.closest('input');
    if (target) {
        console.log(target);
    }
});

nav.addEventListener('click', (e) => {
    renderProjectCards();
    renderTaskCards();
    toggleView(e.target);
});

overlay.addEventListener('click', () => {
    closeNewProjectModal();
    closeNewTaskModal();
    closeUpdateProjectModal();
});
