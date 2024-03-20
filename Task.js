import React from 'react';
const Task = ({ task, onDelete, onToggleCompletion }) => {
return (
<div className="Task">
<input
type="checkbox"
checked={task.completed}
onChange={onToggleCompletion}
/>
<div className="Task-details">
<div className="Task-text">{task.text}</div>
<div className="Task-priority">Priority: {task.priority}</div>
<div className="Task-due-date">Due Date: {task.dueDate}</div>
</div>
</div>
);
};
export default Task;