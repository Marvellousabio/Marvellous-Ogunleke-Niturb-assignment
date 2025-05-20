"use strict";
class Taskx {
    constructor(title, description) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
    }
}
class TaskManagerx {
    constructor() {
        this.tasks = [];
    }
    addTask(title, description) {
        const newTask = new Task(title, description);
        this.tasks.push(newTask);
        return newTask;
    }
    updateTask(id, newTitle, newDescription) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.title = newTitle;
        }
    }
    removeTask() {
        this.tasks.pop();
    }
}
