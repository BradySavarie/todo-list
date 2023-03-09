const tasks = [];

class Task {
    constructor(
        title,
        description,
        dueDate,
        priority,
        tasksIndex,
        projectsIndex
    ) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
        this.tasksIndex = tasksIndex;
        this.projectsIndex = projectsIndex;
    }
}

function create(
    title,
    description,
    dueDate,
    priority,
    tasksIndex,
    projectsIndex
) {
    tasks.push(
        new Task(
            title,
            description,
            dueDate,
            priority,
            tasksIndex,
            projectsIndex
        )
    );
}

create('something', 'anything', 123, 0, 0, 0);
console.log(tasks);
