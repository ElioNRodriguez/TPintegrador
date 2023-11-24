import React from 'react';
import { useState,} from 'react';

const TaskForm = ({ onAddTask }) => {

    const [newTask, setNewTask] = useState('');

    const handleInputChange = e => {
        setNewTask(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (newTask.trim() !== '') {
            onAddTask(newTask);
            setNewTask('');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTask} onChange={handleInputChange} />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
}

export default TaskForm;
