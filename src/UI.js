import { projectsList, readProject } from './projects';
import { readTask } from './tasks';

function getProjectFormData(form) {
    const projectFormData = new FormData(form);
    const [titlePair, descriptionPair] = projectFormData.entries();
    const values = [titlePair[1], descriptionPair[1]];
    return values;
}

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

function getTaskFormData(form) {
    const taskFormData = new FormData(form);
    const [titlePair, descriptionPair, dueDatePair, priorityPair] =
        taskFormData.entries();
    const values = [
        titlePair[1],
        descriptionPair[1],
        dueDatePair[1],
        priorityPair[1],
    ];
    return values;
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
    getProjectFormData,
    getTaskFormData,
    renderNewProjectCard,
};
