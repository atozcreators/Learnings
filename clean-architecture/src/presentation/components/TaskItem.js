function TaskItem ({ task, onToggle, onDelete }) {
    return (<div style={{
        background: task.completed ? 'rgb(82 139 132 / 41%)' : 'rgb(118 154 209 / 41%)'
    }} className="task-item">
        <h3 className="text">{task.title}</h3>
        <p className="text">{task.description}</p>
        <p className="text"><strong>Status:</strong>{task.completed ? '✅ Done' : '❌ Not done'}</p>

        <button className="btn-tgl" onClick={() => onToggle(task.id)}>Toggle</button>
        <button className="btn-del" onClick={() => onDelete(task.id)}>Delete</button>
    </div>
);
}

export default TaskItem ;