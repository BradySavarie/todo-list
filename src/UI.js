import { projectsList, readProject } from './projects';
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

export {
    openNewProjectModal,
    openReadProjectModal,
    openDeleteProjectModal,
    openNewTaskModal,
    openReadTaskModal,
    openDeleteTaskModal,
    renderNewProjectCard,
};
