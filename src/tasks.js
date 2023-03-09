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
        this.tasksIndex = tasksIndex;
        this.projectsIndex = projectsIndex;
        this.completed = false;
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
