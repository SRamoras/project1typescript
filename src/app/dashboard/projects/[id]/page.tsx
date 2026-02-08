"use client"
import React, { useEffect, useState } from 'react'
import {listTasks, addTask, toggleTaskDone} from "../../../../services/task.service"
import { useParams } from "next/navigation";
import {Task} from "../../../../types/Task"
import TaskCard from "./TaskCard"
import styles from "./page.module.css"
import {listProjects} from "../../../../services/project.service"
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

const page = () => {
  const { id } = useParams<{ id: string }>();
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState("")
  const [projectName, setProjectName] = useState("")
  const projects = listProjects()
  const filteredTasks = tasks.filter(task => task.projectId === id)
  
  useEffect(() => {
    setTasks(listTasks())
    
    const rightProject = projects.find(project => project.id === id)
    if(rightProject){
      setProjectName(rightProject.name)
    }
  }, [])

  function setDone(taskID: string): void{
    toggleTaskDone(taskID)
    setTasks(listTasks())
  }

  return (
    <div className={styles.page}>
      <h1>Project: {projectName}</h1>
      <form className={styles.formAddProjects} onSubmit={e => {
        e.preventDefault()
        addTask(id, title)
        setTasks(listTasks())
      }}>
          <Input id="title" placeholder="Enter task title" Icon='assignment' type="title" value={title} onChange={e => setTitle(e.target.value)} />
          <Button type='submit' value="Add Task"/>
      </form>
      <div>

      </div>
      {filteredTasks.length !== 0
        ? filteredTasks.map((task, index) => (
          <TaskCard
            key={task.id}
            task={task}
            setDone={setDone}
            index={index}
          />
        ))
        :
        <p>There is no Tasks yet...</p>
      }
    </div>
  )
}

export default page