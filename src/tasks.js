import { projectsList } from './projects';

class Task {
    constructor(projectId, title, dueDate, priority) {
        this.projectId = projectId;
        this.taskId = Date.now().toString();
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

function updateCompletedStatus(taskId) {
    projectsList.forEach((project) => {
        project.tasks.forEach((task) => {
            if (task.taskId === taskId) {
                if (task.completed) {
                    task.completed = false;
                } else {
                    task.completed = true;
                }
            }
        });
    });
}

function updateTask(title, dueDate, priority, taskId) {
    projectsList.forEach((project) => {
        const task = project.tasks.find((element) => element.taskId === taskId);
        if (task) {
            task.title = title;
            task.dueDate = dueDate;
            task.priority = priority;
        }
    });
}

function deleteTask(taskId) {
    projectsList.forEach((project, index) => {
        const taskIndex = project.tasks.findIndex(
            (element) => element.taskId === taskId
        );
        projectsList[index].tasks.splice(taskIndex, 1);
    });
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

function getUpdateTaskFormData(form) {
    const taskFormData = new FormData(form);
    const [titlePair, dueDatePair, priorityPair, idPair] =
        taskFormData.entries();
    const values = [titlePair[1], dueDatePair[1], priorityPair[1], idPair[1]];
    return values;
}

export {
    createTask,
    updateCompletedStatus,
    updateTask,
    deleteTask,
    getTaskFormData,
    getUpdateTaskFormData,
};
