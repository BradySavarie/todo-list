const projectsList = [];

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
        this.id = Date.now().toString();
    }
}

function createProject(title) {
    const newProject = new Project(title);
    projectsList.push(newProject);
}

function readProject(projectId) {
    const project = projectsList.find((element) => element.id === projectId);
    return project;
}

function updateProject(title, projectId) {
    const project = projectsList.find((element) => element.id === projectId);
    project.title = title;
}

function deleteProject() {
    console.log('Project Deleted');
}

function getProjectFormData(form) {
    const projectFormData = new FormData(form);
    const [titlePair] = projectFormData.entries();
    const values = [titlePair[1]];
    return values;
}

function getUpdateProjectFormData(form) {
    const updateProjectFormData = new FormData(form);
    const [titlePair, idPair] = updateProjectFormData.entries();
    const values = [titlePair[1], idPair[1]];
    return values;
}

export {
    projectsList,
    createProject,
    readProject,
    updateProject,
    deleteProject,
    getProjectFormData,
    getUpdateProjectFormData,
};
