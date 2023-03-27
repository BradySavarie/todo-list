import { format } from 'date-fns';

import * as UI from './UI';
import * as Projects from './projects';
import * as Tasks from './tasks';

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
    const [title] = Projects.getProjectFormData(e.target);
    Projects.createProject(title);
    Projects.storeProjectsList();
    UI.updateNewTaskModal();
    UI.closeNewProjectModal();
    UI.renderProjectCards();
});

openNewProjectModalBtn.addEventListener('click', () => {
    UI.openNewProjectModal();
});

closeNewProjectModalBtn.addEventListener('click', () => {
    UI.closeNewProjectModal();
});

closeUpdateProjectModalBtn.addEventListener('click', () => {
    UI.closeUpdateProjectModal();
});

openNewTaskModalBtn.addEventListener('click', () => {
    UI.openNewTaskModal();
});

closeNewTaskModalBtn.addEventListener('click', () => {
    UI.closeNewTaskModal();
});

closeUpdateTaskModalBtn.addEventListener('click', () => {
    UI.closeUpdateTaskModal();
});

updateProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title, projectId] = Projects.getUpdateProjectFormData(e.target);
    Projects.updateProject(title, projectId);
    Projects.storeProjectsList();
    UI.updateNewTaskModal();
    UI.closeUpdateProjectModal();
    UI.renderProjectCards();
});

updateTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [title, dueDate, priority, taskId] = Tasks.getUpdateTaskFormData(
        e.target
    );
    const formattedDueDate = format(new Date(dueDate), 'MMM-dd');
    Tasks.updateTask(title, formattedDueDate, priority, taskId);
    Projects.storeProjectsList();
    UI.closeUpdateTaskModal();
    UI.renderTaskCards();
});

createNewTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [projectId, title, dueDate, priority] = Tasks.getTaskFormData(
        e.target
    );
    const formattedDueDate = format(new Date(dueDate), 'MMM-dd');
    Tasks.createTask(projectId, title, formattedDueDate, priority);
    Projects.storeProjectsList();
    UI.closeNewTaskModal();
    UI.renderTaskCards();
});

projectsScroller.addEventListener('click', (e) => {
    const targetProjectKey = e.target.closest('[data-projectKey]');
    const targetTaskKey = e.target.closest('[data-taskKey]');
    if (e.target.id === 'openUpdateProjectModalBtn') {
        UI.openUpdateProjectModal(targetProjectKey.dataset.projectkey);
    } else if (e.target.id === 'deleteProjectBtn') {
        Projects.deleteProject(targetProjectKey.dataset.projectkey);
        Projects.storeProjectsList();
        UI.renderProjectCards();
    } else if (e.target.id === 'deleteTaskBtn') {
        Tasks.deleteTask(targetTaskKey.dataset.taskkey);
        Projects.storeProjectsList();
        UI.renderProjectCards();
    } else if (e.target.matches('input')) {
        Tasks.updateCompletedStatus(targetTaskKey.dataset.taskkey);
        Projects.storeProjectsList();
        UI.renderProjectCards();
    }
});

tasksContainer.addEventListener('click', (e) => {
    const targetTaskKey = e.target.closest('[data-taskKey]');
    if (e.target.id === 'openUpdateTaskModalBtn') {
        UI.openUpdateTaskModal(targetTaskKey.dataset.taskkey);
    } else if (e.target.id === 'deleteTaskBtn') {
        Tasks.deleteTask(targetTaskKey.dataset.taskkey);
        Projects.storeProjectsList();
        UI.renderTaskCards();
    } else if (e.target.matches('input')) {
        Tasks.updateCompletedStatus(targetTaskKey.dataset.taskkey);
        Projects.storeProjectsList();
        UI.renderTaskCards();
    }
});

nav.addEventListener('click', (e) => {
    UI.renderProjectCards();
    UI.renderTaskCards();
    UI.toggleView(e.target);
});

overlay.addEventListener('click', () => {
    UI.closeNewProjectModal();
    UI.closeNewTaskModal();
    UI.closeUpdateProjectModal();
});
