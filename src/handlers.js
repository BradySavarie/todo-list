import {
    openNewProjectModal,
    openReadProjectModal,
    openDeleteProjectModal,
} from './UI';

const content = document.getElementById('content');

content.addEventListener('click', (e) => {
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
            console.log('default');
    }
});
