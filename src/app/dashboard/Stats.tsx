"use client"
import React, { useEffect, useState } from 'react'
import { listProjects } from "../../services/project.service"
import { listTasks } from '../../services/task.service'
import "./Stats.css"
const Stats = () => {

    const [totalProjects, setTotalProjects] = useState(0)
    const [totalTasks, setTotalTasks] = useState(0)
    const [completedTasks, setCompletedTasks] = useState(0)
    const [pendingTasks, setPendingTasks] = useState(0)
    
    useEffect(() => {
        const projects = listProjects()
        const tasks = listTasks()

        setTotalProjects(projects.length);
        setTotalTasks(tasks.length);
        setCompletedTasks(tasks.filter(task => task.done).length);
        setPendingTasks(tasks.filter(task => !task.done).length);
    }, [])

  return (
    <div className="statsContainer">
        <p className='statsCard'>Total de projetos: {totalProjects}</p>
        <p className='statsCard'>Total de tarefas: {totalTasks}</p>
        <p className='statsCard'>Tarefas concluídas: {completedTasks} ✅</p>
        <p className='statsCard'>Tarefas pendentes: {pendingTasks} ⌛</p>
    </div>
  )
}

export default Stats