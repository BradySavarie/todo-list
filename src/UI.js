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

function renderProjectCards() {
    const projectsScroller = document.getElementById('projectsScroller');
    projectsScroller.innerHTML = '';
    projectsList.forEach((project) => {
        projectsScroller.insertAdjacentHTML(
            'afterbegin',
            `<div
                    data-projectKey=${project.id} class="h-full min-w-[80%] overflow-y-scroll flex grow shrink-0 basis-auto snap-center shadow-md"
                    >
            <div
                class="flex flex-col justify-start items-start cursor-pointer rounded-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-full font-Lato font-bold pl-10 pt-14 shadow-md"
            >
                <div class='flex justify-between gap-4 w-full items-center text-2xl mb-5'>
                    <p>${project.title}</p>
                    <i class="hover:cursor-pointer mr-8 fa-solid fa-pen-to-square"></i>
                </div>
                <div class="h-[1.25px] w-full bg-white"></div>
                <div  id='projectCardTasksContainer' class="overflow-y-scroll h-full w-full flex flex-col mt-5 gap-3">
                </div>
            </div>
        </div>`
        );
        project.tasks.forEach((task) => {
            const projectCardTasksContainer = document.getElementById(
                'projectCardTasksContainer'
            );
            projectCardTasksContainer.insertAdjacentHTML(
                'beforeend',
                `<div class="flex items-center gap-4 text-xl">
                        <input type='checkbox' class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md'>
                        <p class="font-normal">${task.title}</p>
                </div>`
            );
        });
    });
}

function openUpdateProjectModal(projectId) {
    console.log('Update Project Modal Opened');
}

function openNewTaskModal() {
    const createNewTaskModal = document.getElementById('createNewTaskModal');
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('hidden');
    createNewTaskModal.classList.remove('hidden');
    createNewTaskModal.classList.add('flex');
}

function updateNewTaskModal() {
    const selectProjectDropdown = document.getElementById(
        'selectProjectDropdown'
    );
    selectProjectDropdown.innerHTML = '';
    projectsList.forEach((project) => {
        const option = document.createElement('option');
        option.innerText = `${project.title}`;
        option.setAttribute('value', `${project.id}`);
        selectProjectDropdown.appendChild(option);
    });
}

function closeNewTaskModal() {
    const createNewTaskModal = document.getElementById('createNewTaskModal');
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
    createNewTaskModal.classList.add('hidden');
    createNewTaskModal.classList.remove('flex');
}

function renderTaskCards() {
    const tasksContainer = document.getElementById('tasksContainer');
    tasksContainer.innerHTML = '';
    projectsList.forEach((project) => {
        project.tasks.forEach((task) => {
            tasksContainer.insertAdjacentHTML(
                'afterbegin',
                `<div
                        class="flex justify-between items-center h-[25%] w-full rounded-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white p-4"
            >
                <div class="flex items-center gap-4">
                    <input type="checkbox" class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-md' />
                    <p class="text-xl">${task.title}</p>
                </div>
                <div class="flex gap-4 text-xl">
                    <button data-element="openReadTaskModalBtn">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button data-element="openDeleteTaskModalBtn">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>`
            );
        });
    });
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
    openUpdateProjectModal,
    renderProjectCards,
    openNewTaskModal,
    updateNewTaskModal,
    closeNewTaskModal,
    renderTaskCards,
    toggleView,
};
