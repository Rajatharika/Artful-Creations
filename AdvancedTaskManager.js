import React, { useState } from 'react';
import Task from './Task';
const AdvancedTaskManager = () => {
const [tasks, setTasks] = useState([]);
const [newTask, setNewTask] = useState('');
const [priority, setPriority] = useState('Low');
const [dueDate, setDueDate] = useState('');
const [filter, setFilter] = useState('All');
const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
const [isEditing, setIsEditing] = useState(false);
const addTask = () => {
if (newTask.trim() === '' || dueDate === '') return;
const taskObject = {
text: newTask,
priority,
dueDate,
completed: false,
};
if (isEditing) {
const updatedTasks = [...tasks];
updatedTasks[selectedTaskIndex] = taskObject;
setTasks(updatedTasks);
setSelectedTaskIndex(null);
setIsEditing(false); 
} else {
setTasks([...tasks, taskObject]);
}
setNewTask('');
setPriority('Low');
setDueDate('');
};
const deleteTask = (index) => {
const updatedTasks = [...tasks];
updatedTasks.splice(index, 1);
setTasks(updatedTasks);
setSelectedTaskIndex(null);
setIsEditing(false);
};
const toggleCompletion = (index) => {
const updatedTasks = [...tasks];
updatedTasks[index].completed = !updatedTasks[index].completed;
setTasks(updatedTasks);
};
const filterTasks = () => {
switch (filter) {
case 'All':
return tasks;
case 'Completed':
return tasks.filter((task) => task.completed);
case 'Pending':
return tasks.filter((task) => !task.completed);
default:
return tasks;
}
};
const editTask = (index) => {
setSelectedTaskIndex(index);
const selectedTask = tasks[index];
setNewTask(selectedTask.text);
setPriority(selectedTask.priority);
setDueDate(selectedTask.dueDate);
setIsEditing(true);
};
return (
<div className="container">
<div className="header">
<div className="title-box">
<h2>Task Manager</h2>
</div>
</div>
<form onSubmit={(e) => e.preventDefault()} className="task-form">
<div className="form-group">
<label htmlFor="newTask">Task:</label>
<input
type="text"
id="newTask"
placeholder="Add a task"
value={newTask}
onChange={(e) => setNewTask(e.target.value)}
/>
</div>
<div className="form-group">
<label htmlFor="priority">Priority:</label>
<select
id="priority"
value={priority}
onChange={(e) => setPriority(e.target.value)}
>
<option value="Low">Low</option>
<option value="Medium">Medium</option>
<option value="High">High</option>
</select>
</div>
<div className="form-group">
<label htmlFor="dueDate">Due Date:</label>
<input
type="date"
id="dueDate"
value={dueDate}
onChange={(e) => setDueDate(e.target.value)}
required
/>
</div>
<div className="form-group">
<button onClick={addTask}>
{isEditing ? 'Edit' : 'Add'} {    
}
</button>
</div>
</form>
<form className="filter-form">
<div className="form-group">
<label htmlFor="filter">Filter:</label>
<select
id="filter"
value={filter}
onChange={(e) => setFilter(e.target.value)}
>
<option value="All">All</option>
<option value="Completed">Completed</option>
<option value="Pending">Pending</option>
</select>
</div>
</form>
<p>
<b>Filtered Tasks:</b>
</p>
<div>
{filterTasks().map((task, index) => (
<div key={index} className="task-container">
<Task
task={task}
onDelete={() => deleteTask(index)}
onToggleCompletion={() => toggleCompletion(index)}
onEdit={() => editTask(index)}
/>
<div className="button-container">
<button className="small-button" onClick={() => editTask(index)}>Edit</button>
<button className="small-button" onClick={() => deleteTask(index)}>Delete</button>
</div>
</div>
))}
</div>
<div>
<h3>Task List:</h3>
<ul>
{tasks.map((task, index) => (
<li key={index}>
{index + 1} {task.text} - Priority: {task.priority} - Due Date:
{task.dueDate}
</li>
))}
</ul>
</div>
</div>
);
};
export default AdvancedTaskManager;