import { readProject } from './projects';
import { readTask } from './tasks';

function openNewProjectModal() {
    const createNewProjectModal = document.getElementById(
        'createNewProjectModal'
    );
    createNewProjectModal.classList.remove('hidden');
}

function openReadProjectModal() {
    readProject();
    console.log('Read Project Modal Opened');
}

function openDeleteProjectModal() {
    console.log('Delete Project Modal Opened');
}

function renderNewProjectCard(projectsIndex) {
    const projectsContainer = document.getElementById('projectsContainer');
    const newProjectCard = document.createElement('div');

    newProjectCard.innerHTML = `<button data-projectsIndex="${projectsIndex}">Project Title</button>
                        <p>Project Description</p>
                        <button data-element="openReadProjectModalBtn">
                            View Project
                        </button>
                        <button data-element="openDeleteProjectModalBtn">
                            Delete Project
                        </button>`;
    projectsContainer.appendChild(newProjectCard);
}

function openNewTaskModal() {
    const createNewTaskModal = document.getElementById('createNewTaskModal');
    createNewTaskModal.classList.remove('hidden');
}

function openReadTaskModal() {
    readTask();
    console.log('Read Task Modal Opened');
}

function openDeleteTaskModal() {
    console.log('Delete Task Modal Opened');
}

function renderNewTaskCard() {
    const tasksContainer = document.getElementById('tasksContainer');
    const newTaskCard = document.createElement('div');

    newTaskCard.innerHTML = `<h1>Task Title</h1>
                        <p>Task Description</p>
                        <button data-element="openReadTaskModalBtn">
                            View Task
                        </button>
                        <button data-element="openDeleteTaskModalBtn">
                            Delete Task
                        </button>`;
    tasksContainer.appendChild(newTaskCard);
}

export {
    openNewProjectModal,
    openReadProjectModal,
    openDeleteProjectModal,
    renderNewProjectCard,
    openNewTaskModal,
    openReadTaskModal,
    openDeleteTaskModal,
    renderNewTaskCard,
};
