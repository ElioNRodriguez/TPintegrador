import React from 'react';
import { useState,} from 'react';
import "../TaskFormComponent/TaskForm.css"

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
        <form onSubmit={handleSubmit} className='task-form'>
            <input type="text" value={newTask} onChange={handleInputChange} className='input-lista' />
            <button type="submit" className='btn-agregar'>Agregar Tarea</button>
        </form>
    );
}

export default TaskForm;
