import React, { useState } from 'react'
import "../App.css"

import { useContext } from 'react'
import TasksContext from '../contexts/TaskContext'

function TaskCreate({ task, taskFormUpdate, onUpdate }) {
    const { createTask } = useContext(TasksContext);

    const [title, setTitle] = useState(task ? task.title : "");
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskFormUpdate) {
            onUpdate(task.id, title, taskDesc)
            //editTaskById(task.id, title, taskDesc);
        }
        else {
            // onCreate(title, taskDesc);
            createTask(title, taskDesc);
        }
        setTitle("");
        setTaskDesc("");
    }
    return (
        <div>{taskFormUpdate ?
            <div className='task-update'>
                <h3>Taskı Düzenleyiniz</h3>
                <form className='task-form'>
                    <label className='task-label'>Başlığı Düzenleyiniz</label>
                    <input value={title} className='task-input' onChange={handleChange} />
                    <label className='task-label'>Taskı Düzenleyiniz</label>
                    <textarea
                        value={taskDesc}
                        onChange={(e) => setTaskDesc(e.target.value)}
                        className='task-textarea'
                        rows={5} />
                    <button className='task-button update-button' onClick={handleSubmit}>Düzenle</button>
                </form>
            </div> :
            <div className='task-create'>
                <h3>Task Ekleyiniz</h3>
                <form className='task-form'>
                    <label className='task-label'>Başlık</label>
                    <input value={title} className='task-input' onChange={handleChange} />
                    <label className='task-label'>Task Giriniz</label>
                    <textarea
                        value={taskDesc}
                        onChange={(e) => setTaskDesc(e.target.value)}
                        className='task-textarea'
                        rows={5} />
                    <button className='task-button' onClick={handleSubmit}>Oluştur</button>
                </form>
            </div>}</div>

    )
}

export default TaskCreate