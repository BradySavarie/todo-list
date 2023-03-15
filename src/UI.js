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

    /* newProjectCard.innerHTML = `<div
                            data-element="openReadProjectModalBtn"
                            class="flex flex-col cursor-pointer rounded-lg bg-red-600 text-white w-[65%] py-12 font-Lato font-bold"
                        >
                            <button data-projectsIndex=${projectsIndex} class="text-2xl">
                                My Tasks
                            </button>
                            <!-- <button data-element="openDeleteProjectModalBtn">
                                Delete Project
                            </button> -->
                        </div>`;
    projectsContainer.appendChild(newProjectCard); */
    projectsContainer.insertAdjacentHTML(
        'beforeend',
        `<div
                        class="h-[90%] w-[65%] flex grow-0 shrink-0 basis-auto"
                    >
                        <div
                            data-element="openReadProjectModalBtn"
                            class="flex flex-col cursor-pointer rounded-lg bg-red-600 text-white w-full py-12 font-Lato font-bold mr-5"
                        >
                            <button data-projectsIndex=${projectsIndex} class="text-2xl">
                                My Tasks
                            </button>
                            <!-- <button data-element="openDeleteProjectModalBtn">
                                Delete Project
                            </button> -->
                        </div>
                    </div>`
    );
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
