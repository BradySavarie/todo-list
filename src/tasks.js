import { projectsList } from './projects';

class Task {
    constructor(title, description, dueDate, priority, projectsIndex) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectsIndex = projectsIndex;
        this.completed = false;
    }
}

function createTask(title, description, dueDate, priority, projectsIndex) {
    const newTask = new Task(
        title,
        description,
        dueDate,
        priority,
        projectsIndex
    );
    projectsList[projectsIndex].tasks.push(newTask);
}

function readTask() {
    console.log('Task information returned');
}

function getTaskFormData(form) {
    const taskFormData = new FormData(form);
    const [titlePair, descriptionPair, dueDatePair, priorityPair] =
        taskFormData.entries();
    const values = [
        titlePair[1],
        descriptionPair[1],
        dueDatePair[1],
        priorityPair[1],
    ];
    return values;
}

export { createTask, readTask, getTaskFormData };
