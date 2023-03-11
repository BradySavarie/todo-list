import { readProject } from './projects';

function openNewProjectModal() {
    console.log('New Project Modal Opened');
}

function openReadProjectModal() {
    readProject();
    console.log('Read Project Modal Opened');
}

function openDeleteProjectModal() {
    console.log('Delete Project Modal Opened');
}

export { openNewProjectModal, openReadProjectModal, openDeleteProjectModal };
