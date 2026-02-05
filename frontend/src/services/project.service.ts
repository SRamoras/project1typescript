import { Project } from "../types/Project"
import { setStorageItem, getStorageItem } from "../utils/storage"


export function listProjects(): Project[]{
    let projects: Project[] = getStorageItem("projects") || []
    return projects
}


export function createProject(name: string): Project[]{
    const projects = listProjects()
    const newProject: Project = {id: crypto.randomUUID(), name: name, createdAt: Date.now()}
    const updatedProjects = [...projects, newProject]
    setStorageItem("projects", updatedProjects)
    return updatedProjects
}


export function deleteProject(id: string): Project[]{
    const projects = listProjects()

    const updatedProjects = projects.filter(project => project.id !== id)
    setStorageItem("projects", updatedProjects)
    return updatedProjects
}