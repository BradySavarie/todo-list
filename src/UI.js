import { projectsList, readProject } from './projects';
import { readTask } from './tasks';

function openNewProjectModal() {
    const createNewProjectModal = document.getElementById(
        'createNewProjectModal'
    );
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');
    createNewProjectModal.classList.remove('hidden');
    createNewProjectModal.classList.add('flex');
}

function closeNewProjectModal() {
    const createNewProjectModal = document.getElementById(
        'createNewProjectModal'
    );
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
    createNewProjectModal.classList.add('hidden');
    createNewProjectModal.classList.remove('flex');
}

function renderProjects() {
    const projectsScroller = document.getElementById('projectsScroller');
    projectsScroller.innerHTML = '';
    projectsList.forEach((project) => {
        projectsScroller.insertAdjacentHTML(
            'beforeend',
            `<div
                        class="h-full min-w-[80%] flex grow shrink-0 basis-auto snap-center shadow-md"
                    >
                        <div
                            id="openProjectViewBtn"
                            class="flex flex-col justify-start items-start cursor-pointer rounded-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-full font-Lato font-bold pl-10 pt-14 shadow-md"
                        >
                            <p class="text-2xl mb-5">${project.title}</p>
                            <div class="h-[1.25px] w-full bg-white"></div>
                            <div class="h-full flex flex-col mt-5 gap-3">
                                <div class="flex items-center gap-4 text-xl">
                                    <i class="fa-regular fa-square"></i>
                                    <p class="font-normal">Buy Groceries</p>
                                </div>
                                <div class="flex items-center gap-4 text-xl">
                                    <i class="fa-regular fa-square"></i>
                                    <p class="font-normal">Pay Bills</p>
                                </div>
                                <div class="flex items-center gap-4 text-xl">
                                    <i class="fa-regular fa-square"></i>
                                    <p class="font-normal">Cook Dinner</p>
                                </div>
                                <div class="flex items-center gap-4 text-xl">
                                    <i class="fa-regular fa-square"></i>
                                    <p class="font-normal">Feed Cats</p>
                                </div>
                            </div>
                        </div>
                    </div>`
        );
    });
}

function openProjectView() {
    readProject();
    console.log('Read Project Modal Opened');
}

function openNewTaskModal() {
    const createNewTaskModal = document.getElementById('createNewTaskModal');
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');
    createNewTaskModal.classList.remove('hidden');
    createNewTaskModal.classList.add('flex');
}

function closeNewTaskModal() {
    const createNewTaskModal = document.getElementById('createNewTaskModal');
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
    createNewTaskModal.classList.add('hidden');
    createNewTaskModal.classList.remove('flex');
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

function toggleView(selection) {
    const projectsPage = document.getElementById('projectsPage');
    const projectsPageBtn = document.getElementById('projectsPageBtn');
    const tasksPage = document.getElementById('tasksPage');
    const tasksPageBtn = document.getElementById('tasksPageBtn');

    if (selection.dataset.view === 'projectsPageBtn') {
        if (!projectsPageBtn.classList.contains('active')) {
            projectsPage.classList.add('flex');
            projectsPage.classList.remove('hidden');
            tasksPage.classList.add('hidden');
            tasksPage.classList.remove('flex');
            projectsPageBtn.classList.add('bg-gray-100', 'active');
            tasksPageBtn.classList.remove('bg-gray-100', 'active');
        }
    } else if (selection.dataset.view === 'tasksPageBtn') {
        if (!tasksPageBtn.classList.contains('active')) {
            tasksPage.classList.add('flex');
            tasksPage.classList.remove('hidden');
            projectsPage.classList.add('hidden');
            projectsPage.classList.remove('flex');
            tasksPageBtn.classList.add('bg-gray-100', 'active');
            projectsPageBtn.classList.remove('bg-gray-100', 'active');
        }
    }
}

export {
    openNewProjectModal,
    closeNewProjectModal,
    openProjectView,
    renderProjects,
    openNewTaskModal,
    closeNewTaskModal,
    renderNewTaskCard,
    toggleView,
};
