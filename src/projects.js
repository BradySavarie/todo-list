let projectsList = [];

const storedProjectsListJson = localStorage.getItem('projectsList');
const storedProjectsList = JSON.parse(storedProjectsListJson);
if (!storedProjectsList === null) {
    projectsList = storedProjectsList;
}

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

function updateProject(title, projectId) {
    const project = projectsList.find((element) => element.id === projectId);
    project.title = title;
}

function deleteProject(projectId) {
    projectsList.forEach((project, index) => {
        if (project.id === projectId) {
            projectsList.splice(index, 1);
        }
    });
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

function storeProjectsList() {
    const projectsListJson = JSON.stringify(projectsList);
    localStorage.setItem('projectsList', projectsListJson);
}

export {
    projectsList,
    createProject,
    updateProject,
    deleteProject,
    getProjectFormData,
    getUpdateProjectFormData,
    storeProjectsList,
};
