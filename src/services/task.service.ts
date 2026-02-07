import { Task } from "../types/Task"
import { setStorageItem, getStorageItem } from "../utils/storage"

export function listTasks(): Task[]{
    let tasks: Task[] = getStorageItem("tasks") || []
    return tasks
}

export function addTask(projectId: string, title: string): Task[]{
    const tasks = listTasks()
    const newTask: Task = {id: crypto.randomUUID(), projectId: projectId, title: title, done: false}
    const updatedTasks = [...tasks, newTask]
    setStorageItem("tasks", updatedTasks)
    return updatedTasks
}

export function deleteTasksByProject(projectId: string): Task[]{
    const tasks = listTasks()
    const updatedTasks: Task[] = tasks.filter(task => task.projectId !== projectId)
    setStorageItem("tasks", updatedTasks)
    return updatedTasks
}

export function toggleTaskDone(id: string): Task[]{
    let tasks = listTasks()
    const updatedTasks: Task[] = tasks.map(task => {
        if(task.id === id){
            return {...task, done: !task.done}
        } else {
            return task
        }
    })
    setStorageItem("tasks", updatedTasks)
    return updatedTasks
}