import React from 'react';
import './style.css'

export default function Task ({task}) {
    return (
        <div
            className='task-container'
        >
            <div className='task-title'>
                {task.title}
            </div>
        </div>
    )
}
