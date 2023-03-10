import { projectsList } from './projects';

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

function createTask(
    title,
    description,
    dueDate,
    priority,
    tasksIndex,
    projectsIndex
) {
    const newTask = new Task(
        title,
        description,
        dueDate,
        priority,
        tasksIndex,
        projectsIndex
    );
    projectsList[projectsIndex].tasks.push(newTask);
}

export { createTask };
