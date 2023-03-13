const projectsList = [];
let activeProject = projectsList;

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
}

function createProject(title, description) {
    const newProject = new Project(title, description);
    projectsList.push(newProject);
}

function readProject() {
    console.log('Project information Returned');
}

function deleteProject() {
    console.log('Project Deleted');
}

function getActiveProject() {
    return activeProject;
}

function setActiveProject(projectsIndex) {
    activeProject = projectsList[projectsIndex];
}

export {
    projectsList,
    setActiveProject,
    getActiveProject,
    createProject,
    readProject,
};
