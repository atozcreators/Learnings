import React, { useState } from "react";
import TaskItem from "../components/TaskItem";
import TaskManager from "../../application/usecases/TaskManager";
import './TaskPage.css'

const manager = new TaskManager();

function TaskPage() {
    const [tasks, setTasks] = useState(manager.getTask());
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [filter, setFilter] = useState('all');

    const addTask = () => {
        if (!title) return;
        manager.addTask(title, description);
        setTasks([...manager.getTask()]);
        setTitle('');
        setDescription('');
    };

    const toggleTask = (id) => {
        manager.toggleTask(id);
        setTasks([...manager.getTask()]);
    };

    const deleteTask = (id) => {
        manager.deleteTask(id);
        setTasks([...manager.getTask()]);
    };

    const getFilteredTasks = () => {
        if (filter === 'completed') return tasks.filter(t => t.completed);
        if (filter === 'incomplete') return tasks.filter(t => !t.completed);
        return tasks;
    }

    return (<div className="main">
        <div className="first-con">
            <h1>Task manager</h1>

            <input className="input" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br />

            <textarea className="input" placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />

            <button className="add" onClick={addTask}>Add Task</button>

            <button className="all" onClick={() => { setFilter('all') }}>All</button>
            <button className="completed" onClick={() => { setFilter('completed') }}>Completed</button>
            <button className="incomplete" onClick={() => { setFilter('incomplete') }}>incomplete</button>
        </div>

        {tasks.length === 0 && <p>No Task Yet!</p>}

        {getFilteredTasks().map(task => (
            <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
            />
        ))}
    </div>
    )
}

export default TaskPage;