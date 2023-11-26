import React from "react";
import { useState } from "react";
import "../TaskItemComponent/TaskItem.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TbEditOff } from "react-icons/tb";

const TaskItem = ({ task, onCompleteTask, onDeleteTask, onEditTask }) => {
  const { id, name, completed } = task;
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleComplete = () => {
    onCompleteTask(id);
  };

  const handleDelete = () => {
    onDeleteTask(id);
  };

  const handleEdit = () => {
    if (editing) {
      onEditTask(id, editedName);
      setEditing(false);
    } else {
      setEditing(true);
    }
  };

  const handleInputChange = (e) => {
    setEditedName(e.target.value);
  };

  return (
    // si esta editando habilita input si no solo muestra la tarea
    <div className="item-container">
      <div className="container-inputlist">
        {editing ? (
          <input
            type="text"
            value={editedName}
            onChange={handleInputChange}
            className="input-edit"
          />
        ) : (
          <span
            style={{ textDecoration: completed ? "line-through red" : "none" }}
            className="span-line"
          >
            {name}
          </span>
        )}
      </div>
      
      <div className="container-buttons">
        <button onClick={handleComplete} className="btn-tareas btn-completar"><FaRegCheckSquare/></button>
        <button onClick={handleDelete} className="btn-tareas btn-eliminar"><FaRegTrashAlt /></button>
        <button onClick={handleEdit} className="btn-tareas btn-guardar">{editing ? <TbEditOff/> : <FaRegEdit/>}</button>
      </div>
    </div>
  );
};

export default TaskItem;
