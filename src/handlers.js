import { displayNewProjectModal } from './UI';

const content = document.getElementById('content');

content.addEventListener('click', (e) => {
    switch (e.target.id) {
        case 'enterNewProjectBtn':
            displayNewProjectModal();
            break;
        default:
            console.log('default');
    }
});
