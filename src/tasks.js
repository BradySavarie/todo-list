import { projectsList } from './projects';

class Task {
    constructor(projectId, title, dueDate, priority) {
        this.projectId = projectId;
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
}

function createTask(projectId, title, dueDate, priority) {
    const newTask = new Task(projectId, title, dueDate, priority);

    projectsList.forEach((project) => {
        if (project.id === projectId) {
            project.tasks.push(newTask);
        }
    });
}

function readTask() {
    console.log('Task information returned');
}

function getTaskFormData(form) {
    const taskFormData = new FormData(form);
    const [projectIdPair, titlePair, dueDatePair, priorityPair] =
        taskFormData.entries();
    const values = [
        projectIdPair[1],
        titlePair[1],
        dueDatePair[1],
        priorityPair[1],
    ];
    return values;
}

export { createTask, readTask, getTaskFormData };
