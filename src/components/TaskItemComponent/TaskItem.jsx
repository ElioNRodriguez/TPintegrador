import React from 'react';
import { useState } from 'react';


const TaskItem = ({ task, onCompleteTask, onDeleteTask, onEditTask }) => {

    const { id, name, completed } = task;
    const [editing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(name);

    const handleComplete = () => {
        onCompleteTask(id)
    };

    const handleDelete = () => {
        onDeleteTask(id)
    };

    const handleEdit = () => {
        if (editing) {
            onEditTask(id, editedName);
            setEditing(false);
        } else {
            setEditing(true);
        }
    };

    const handleInputChange = e => {
        setEditedName(e.target.value);
    };


    return (
        // si esta editando habilita input si no solo muestra la tarea
        <div>
            {editing ? (
                <input type="text" value={editedName} onChange={handleInputChange} />
            ) : (
                <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{name}</span>
            )}
            <button onClick={handleComplete}>Completar</button>
            <button onClick={handleDelete}>Eliminar</button>
            <button onClick={handleEdit}>{editing ? 'Guardar' : 'Editar'}</button>
        </div>
    );
}

export default TaskItem;
