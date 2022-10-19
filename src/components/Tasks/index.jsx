import React from "react";
import Task from "../Task";

const Tasks = ({ tasks }) => {
    return (
        <div className="container">
            <div className="back">
                {tasks.map((task) => (
                    <Task
                        task = { task } />
                ))}
            </div>
        </div>
    )
};

export default Tasks;