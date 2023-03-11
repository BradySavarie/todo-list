import { readProject } from './projects';

function displayNewProjectModal() {
    console.log('New Project Modal Opened');
}

function displayReadProjectModal() {
    readProject();
    console.log('Read Project Modal Opened');
}

export { displayNewProjectModal, displayReadProjectModal };
