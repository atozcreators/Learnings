import Task from '../../domain/task';
import { saveTasks, loadTasks } from '../../infrastructure/storage/TaskStorage';

export default class TaskManager {
    constructor(){
        const rawTasks = loadTasks();
        this.tasks = rawTasks.map((t) => new Task (t.id, t.title, t.description, t.completed))
    }

    presist(){
        saveTasks(this.tasks)
    }

    addTask(title, description){
        const newTask = new Task(
            Date.now(),
            title,
            description
        );
        this.tasks.push(newTask)
        this.presist()
        return newTask
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.presist()
    }

    toggleTask(id){
        const tasks = this.tasks.find(task => task.id === id)

        if(tasks) {
            tasks.toggleCompleted();
            this.presist()
        }
    }

    getTask() {
        return this.tasks;
    }
}