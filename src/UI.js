import { readProject } from './projects';
import { readTask } from './tasks';

function openNewProjectModal() {
    const createNewProjectModal = document.getElementById(
        'createNewProjectModal'
    );
    const overlay = document.getElementById('overlay');
    createNewProjectModal.classList.remove('hidden');
    createNewProjectModal.classList.add('flex');
    overlay.classList.remove('hidden');
}

function closeNewProjectModal() {
    const createNewProjectModal = document.getElementById(
        'createNewProjectModal'
    );
    const overlay = document.getElementById('overlay');
    createNewProjectModal.classList.add('hidden');
    createNewProjectModal.classList.remove('flex');
    overlay.classList.add('hidden');
}

function openReadProjectModal() {
    readProject();
    console.log('Read Project Modal Opened');
}

function openDeleteProjectModal() {
    console.log('Delete Project Modal Opened');
}

function renderNewProjectCard(title, projectsIndex) {
    const projectsContainer = document.getElementById('projectsContainer');
    const newProjectCard = document.createElement('div');

    projectsContainer.insertAdjacentHTML(
        'beforeend',
        `<div
                        class="h-full min-w-[80%] flex grow shrink-0 basis-auto snap-center shadow-md"
                    >
                        <div
                            data-element="openReadProjectModalBtn"
                            class="flex flex-col justify-start items-start cursor-pointer rounded-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-full font-Lato font-bold pl-10 pt-14 shadow-md"
                        >
                            <button
                                data-projectsIndex=${projectsIndex}
                                class="text-2xl mb-5"
                            >
                                ${title}
                            </button>
                            <div class="h-[1.25px] w-full bg-white"></div>
                            <div class="h-full flex flex-col mt-5 gap-3">
                            </div>
                            <!-- <button data-element="openDeleteProjectModalBtn">
                                Delete Project
                            </button> -->
                        </div>
                    </div>`
    );
}

function toggleView(selection) {
    const projectsView = document.getElementById('projectsView');
    const tasksView = document.getElementById('tasksView');

    // Needs Work

    if (selection === 'projectsView') {
        if (!projectsView.classList.contains('bg-gray-100')) {
            projectsView.classList.add('bg-gray-100');
            tasksView.classList.remove('bg-gray-100');
        }
    } else if (selection === 'tasksView') {
        if (!tasksView.classList.contains('bg-gray-100')) {
            tasksView.classList.add('bg-gray-100');
            projectsView.classList.remove('bg-gray-100');
        }
    }
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
    closeNewProjectModal,
    openReadProjectModal,
    openDeleteProjectModal,
    renderNewProjectCard,
    toggleView,
    openNewTaskModal,
    openReadTaskModal,
    openDeleteTaskModal,
    renderNewTaskCard,
};
