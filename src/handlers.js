import { format } from 'date-fns';

import {
    openNewProjectModal,
    closeNewProjectModal,
    openUpdateProjectModal,
    closeUpdateProjectModal,
    openNewTaskModal,
    closeNewTaskModal,
    renderProjectCards,
    openUpdateTaskModal,
    closeUpdateTaskModal,
    renderTaskCards,
    updateNewTaskModal,
    toggleView,
} from './UI';
import {
    projectsList,
    createProject,
    updateProject,
    deleteProject,
    getProjectFormData,
    getUpdateProjectFormData,
    storeProjectsList,
} from './projects';
import {
    createTask,
    updateTask,
    deleteTask,
    updateCompletedStatus,
    getTaskFormData,
    getUpdateTaskFormData,
} from './tasks';

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
const closeUpdateTaskModalBtn = document.getElementById(
    'closeUpdateTaskModalBtn'
);
const createNewProjectForm = document.getElementById('createNewProjectForm');
const updateProjectForm = document.getElementById('updateProjectForm');
const createNewTaskForm = document.getElementById('createNewTaskForm');
const updateTaskForm = document.getElementById('updateTaskForm');
const projectsScroller = document.getElementById('projectsScroller');
const tasksContainer = document.getElementById('tasksContainer');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

// Event Listeners

createNewProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title] = getProjectFormData(e.target);
    createProject(title);
    storeProjectsList();
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

closeUpdateTaskModalBtn.addEventListener('click', () => {
    closeUpdateTaskModal();
});

updateProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title, projectId] = getUpdateProjectFormData(e.target);
    updateProject(title, projectId);
    storeProjectsList();
    updateNewTaskModal();
    closeUpdateProjectModal();
    renderProjectCards();
});

updateTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title, dueDate, priority, taskId] = getUpdateTaskFormData(e.target);
    const formattedDueDate = format(new Date(dueDate), 'MMM-dd');
    updateTask(title, formattedDueDate, priority, taskId);
    storeProjectsList();
    closeUpdateTaskModal();
    renderTaskCards();
});

createNewTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [projectId, title, dueDate, priority] = getTaskFormData(e.target);
    const formattedDueDate = format(new Date(dueDate), 'MMM-dd');
    createTask(projectId, title, formattedDueDate, priority);
    storeProjectsList();
    closeNewTaskModal();
    renderTaskCards();
});

projectsScroller.addEventListener('click', (e) => {
    const targetProjectKey = e.target.closest('[data-projectKey]');
    const targetTaskKey = e.target.closest('[data-taskKey]');
    if (e.target.id === 'openUpdateProjectModalBtn') {
        openUpdateProjectModal(targetProjectKey.dataset.projectkey);
    } else if (e.target.id === 'deleteProjectBtn') {
        deleteProject(targetProjectKey.dataset.projectkey);
        storeProjectsList();
        renderProjectCards();
    } else if (e.target.id === 'deleteTaskBtn') {
        deleteTask(targetTaskKey.dataset.taskkey);
        storeProjectsList();
        renderProjectCards();
    } else if (e.target.matches('input')) {
        updateCompletedStatus(targetTaskKey.dataset.taskkey);
        storeProjectsList();
        renderProjectCards();
    }
});

tasksContainer.addEventListener('click', (e) => {
    const targetTaskKey = e.target.closest('[data-taskKey]');
    if (e.target.id === 'openUpdateTaskModalBtn') {
        openUpdateTaskModal(targetTaskKey.dataset.taskkey);
    } else if (e.target.id === 'deleteTaskBtn') {
        deleteTask(targetTaskKey.dataset.taskkey);
        storeProjectsList();
        renderTaskCards();
    } else if (e.target.matches('input')) {
        updateCompletedStatus(targetTaskKey.dataset.taskkey);
        storeProjectsList();
        renderTaskCards();
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
