import React from 'react'
import { Task } from "../../../../types/Task"
import "./TaskCard.css"

const TaskCard = ({task, setDone, index}: {task: Task; setDone: (id: string) => void; index: number}) => {
    return (
        <div className={`taskCard` + (task.done ? " done" : "")}>
            <p>{index + 1}. {task.title}</p>
            <input type="checkbox" checked={task.done} onChange={() => {setDone(task.id)}} />
        </div>
    )
}

export default TaskCard