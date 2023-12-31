import React from 'react';
import TaskForm from '../TaskFormComponent/TaskForm';
import TaskList from '../TaskListComponent/TaskList';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import "../TaskListContainerComponent/TaskListContainer.css"
import toast from 'react-hot-toast';

const TaskListContainer = () => {
    //usa el local storage como estado inicial de tareas guardadas
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    const [tasks, setTasks] = useState(storedTasks || []);
    
  
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = name => {
        //guarda la tarea con id unico y completado en falso
      const newTask = { id: uuidv4().toString(), name, completed: false };
      setTasks([...tasks, newTask]);
    };
  
    const completeTask = taskId => {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );

      const taskToUpdate = updatedTasks.find(task => task.id === taskId);
      if (taskToUpdate) {
        const message = taskToUpdate.completed ? "Tarea Completada" : "Tarea Reanudada";
        setTasks(updatedTasks);
        toast.success(message);
      }

    };
  
    const deleteTask = taskId => {
        alert("esta seguro?")
      const filteredTasks = tasks.filter(task => task.id !== taskId);
      setTasks(filteredTasks);
    };

    const editTask = (taskId, newName) => {
        const updatedTasks = tasks.map(task =>
          task.id === taskId ? { ...task, name: newName } : task
        );
        setTasks(updatedTasks);
        toast.success("Tarea Editada");
      };

  
    return (
      <div className='List-container'>
        <h1 className='h1-container'>Lista de Tareas</h1>
        <TaskForm onAddTask={addTask} />
        <TaskList tasks={tasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} onEditTask={editTask} />
      </div>
    );
  };

export default TaskListContainer;
