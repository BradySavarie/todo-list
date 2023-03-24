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
                class="flex flex-col justify-start items-start cursor-pointer rounded-xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-full font-Lato font-bold pl-10 pt-14 shadow-md "
            >
                <div class='flex justify-between gap-4 w-full items-center text-2xl mb-5'>
                    <p>${project.title}</p>
                    <i id='openUpdateProjectModalBtn' class="hover:cursor-pointer mr-8 fa-solid fa-pen-to-square"></i>
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
            if (task.completed) {
                projectCardTasksContainer.insertAdjacentHTML(
                    'beforeend',
                    `<div
                        data-taskKey=${task.taskId} class="flex items-center mr-8 rounded-xl bg-gray-50 shadow-md text-black p-4"
            >
            <div class='flex flex-col w-full'>
                <div class='flex justify-between mb-1'>
                    <div class="flex items-center gap-4">
                        <input type="checkbox" class='w-4 h-4 border-orange-400 rounded-md' checked/>
                        <p id='taskTitle' class="text-xl"><strike>${task.title}</strike></p>
                    </div>
                    <div class="flex gap-4 text-xl">
                        <button data-element="openDeleteTaskModalBtn">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class='pl-8 flex flex-col w-full justify-between'>
                    <p><em><strong>Priority: </strong>${task.priority}</em></p>
                    <p><em><strong>Due: </strong>${task.dueDate}</em></p>
                </div>
            </div>
            </div>`
                );
            } else if (!task.completed) {
                projectCardTasksContainer.insertAdjacentHTML(
                    'beforeend',
                    `<div
                        data-taskKey=${task.taskId} class="flex items-center mr-8 rounded-xl bg-gray-50 shadow-md text-black p-4"
            >
            <div class='flex flex-col w-full'>
                <div class='flex justify-between mb-1'>
                    <div class="flex items-center gap-4">
                        <input type="checkbox" class='w-4 h-4 border-orange-400 rounded-md' />
                        <p id='taskTitle' class="text-xl">${task.title}</p>
                    </div>
                    <div class="flex gap-4 text-xl">
                        <button data-element="openDeleteTaskModalBtn">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class='pl-8 flex flex-col w-full justify-between'>
                    <p><em><strong>Priority: </strong>${task.priority}</em></p>
                    <p><em><strong>Due: </strong>${task.dueDate}</em></p>
                </div>
            </div>
            </div>`
                );
            }
        });
    });
}

function openUpdateProjectModal(projectId) {
    const updateProjectModal = document.getElementById('updateProjectModal');
    const updateProjectForm = document.getElementById('updateProjectForm');
    const overlay = document.getElementById('overlay');

    overlay.classList.remove('hidden');
    updateProjectModal.classList.remove('hidden');
    updateProjectModal.classList.add('flex');

    const projectIdInput = document.createElement('input');
    projectIdInput.setAttribute('type', 'hidden');
    projectIdInput.setAttribute('value', `${projectId}`);
    projectIdInput.setAttribute('name', 'projectId');
    updateProjectForm.appendChild(projectIdInput);
}

function closeUpdateProjectModal() {
    const updateProjectModal = document.getElementById('updateProjectModal');
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
    updateProjectModal.classList.add('hidden');
    updateProjectModal.classList.remove('flex');
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

function renderTaskCards() {
    const tasksContainer = document.getElementById('tasksContainer');
    tasksContainer.innerHTML = '';
    projectsList.forEach((project) => {
        project.tasks.forEach((task) => {
            tasksContainer.insertAdjacentHTML(
                'afterbegin',
                `<div
                        data-taskKey=${task.taskId} class="flex items-center h-[25%] w-full rounded-xl border-2 bg-gray-50 shadow-md border-orange-500 text-black p-4"
            >
            <div class='flex flex-col w-full'>
                <div class='flex justify-between mb-1'>
                    <div class="flex items-center gap-4">
                        <input type="checkbox" class='w-4 h-4 border-orange-400 rounded-md' />
                        <p id='taskTitle' class="text-xl">${task.title}</p>
                    </div>
                    <div class="flex gap-4 text-xl">
                        <button data-element="openReadTaskModalBtn">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button data-element="openDeleteTaskModalBtn">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class='pl-8 flex w-full justify-between'>
                    <p><em><strong>Priority: </strong>${task.priority}</em></p>
                    <p><em><strong>Due: </strong>${task.dueDate}</em></p>
                </div>
            </div>
            </div>`
            );
        });
    });
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
    renderProjectCards,
    openUpdateProjectModal,
    closeUpdateProjectModal,
    openNewTaskModal,
    closeNewTaskModal,
    renderTaskCards,
    updateNewTaskModal,
    toggleView,
};
