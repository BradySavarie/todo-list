const projectsList = [];

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasks = [];
        this.id = Date.now().toString();
    }
}

function createProject(title, description) {
    const newProject = new Project(title, description);
    projectsList.push(newProject);
}

function readProject(projectId) {
    const project = projectsList.find((element) => element.id === projectId);
    return project;
}

function updateProject() {
    console.log('Project updated');
}

function deleteProject() {
    console.log('Project Deleted');
}

function getProjectFormData(form) {
    const projectFormData = new FormData(form);
    const [titlePair, descriptionPair] = projectFormData.entries();
    const values = [titlePair[1], descriptionPair[1]];
    return values;
}

export {
    projectsList,
    createProject,
    readProject,
    updateProject,
    deleteProject,
    getProjectFormData,
};
