import {
    openNewProjectModal,
    openReadProjectModal,
    openDeleteProjectModal,
    openNewTaskModal,
    openReadTaskModal,
    openDeleteTaskModal,
} from './UI';

const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main');

sidebar.addEventListener('click', (e) => {
    const element = e.target.getAttribute('data-element');

    switch (element) {
        case 'openNewProjectModalBtn':
            openNewProjectModal();
            break;
        case 'openReadProjectModalBtn':
            openReadProjectModal();
            break;
        case 'openDeleteProjectModalBtn':
            openDeleteProjectModal();
            break;
        default:
            console.log('default project message');
    }
});

main.addEventListener('click', (e) => {
    const element = e.target.getAttribute('data-element');

    switch (element) {
        case 'openNewTaskModalBtn':
            openNewTaskModal();
            break;
        case 'openReadTaskModalBtn':
            openReadTaskModal();
            break;
        case 'openDeleteTaskModalBtn':
            openDeleteTaskModal();
            break;
        default:
            console.log('default task message');
    }
});
