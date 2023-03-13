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

function setActiveProject(project) {
    activeProject = project;
}

function getProjectFormData(form) {
    const projectFormData = new FormData(form);
    const [titlePair, descriptionPair] = projectFormData.entries();
    const values = [titlePair[1], descriptionPair[1]];
    return values;
}

export {
    projectsList,
    setActiveProject,
    getActiveProject,
    createProject,
    readProject,
    getProjectFormData,
};
