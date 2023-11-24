import React from 'react';
import TaskItem from '../TaskItemComponent/TaskItem';

const TaskList = ({ tasks, onCompleteTask, onDeleteTask, onEditTask }) => {
    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onCompleteTask={onCompleteTask} onDeleteTask={onDeleteTask} onEditTask={onEditTask}/>
            ))}
        </div>
    );
}

export default TaskList;
