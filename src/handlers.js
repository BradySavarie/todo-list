import { readProject } from './projects';
import { displayNewProjectModal, displayReadProjectModal } from './UI';

const content = document.getElementById('content');

content.addEventListener('click', (e) => {
    const element = e.target.getAttribute('data-element');

    switch (element) {
        case 'enterNewProjectBtn':
            displayNewProjectModal();
            break;
        case 'readProjectBtn':
            displayReadProjectModal();
            break;
        default:
            console.log('default');
    }
});
