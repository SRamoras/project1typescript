"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { getStorageItem } from "../../utils/storage"
import { createProject, listProjects, deleteProject } from "../../services/project.service"
import { Project } from "../../types/Project"
import ProjectCard from "./ProjectCard"

const page = () => {
    const router = useRouter();
    const [name, setName] = useState<string>("")
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        let isSaved = getStorageItem("email")
        if(!isSaved){
            router.push("/");
        }
    }, [router])

    useEffect(() => {
      setProjects(listProjects());
    }, []);


  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        createProject(name)
        setProjects(listProjects())
      }}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="submit" value="Add Project" />
      </form>

      {
      projects.map(project => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          setProjects={setProjects} 
          deleteProject={deleteProject}
        />
      ))
      }
    </div>
  )
}

export default page