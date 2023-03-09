const projects = [];

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasks = [];
    }
}

function create(title, description) {
    const newProject = new Project(title, description);
    projects.push(newProject);
}

console.log(projects);
create('blah', 'bleh');
console.log(projects);
