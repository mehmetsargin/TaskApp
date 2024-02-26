import React, { useState } from 'react'
import "../App.css"
import TaskCreate from './TaskCreate';

import { useContext } from 'react'
import TasksContext from '../contexts/TaskContext'

function TaskShow({ task }) {
    const { editTaskById, deleteTaskById } = useContext(TasksContext);


    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        // onDelete(task.id)
        deleteTaskById(task.id);
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }
    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setShowEdit(false);
        // onUpdate(id, updatedTitle, updatedTaskDesc);
        editTaskById(id, updatedTitle, updatedTaskDesc)
    }
    return (
        <div className='task-show'>
            {showEdit ?
                <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
                :
                <div>
                    <h3 className='task-title'>Göreviniz</h3>
                    <p>{task.title}</p>
                    <h3 className='task-title'>Yapılacaklar</h3>
                    <p>{task.taskDesc}</p>
                    <div>
                        <button onClick={handleDeleteClick} className='task-delete'>Sil</button>
                        <button onClick={handleEditClick} className='task-edit'>Güncelle</button>
                    </div>
                </div>}
        </div>
    )
}

export default TaskShow