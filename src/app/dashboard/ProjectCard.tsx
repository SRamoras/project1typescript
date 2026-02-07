import React from 'react'
import { Project } from "../../types/Project"
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
  handleDeleteProject: (id: string) => void
};

const ProjectCard = ({project, handleDeleteProject}: ProjectCardProps) => {
  return (
    <div>
        <Link href={`/dashboard/projects/${project.id}`}>
          <p>{project.name}</p>
        </Link>
          <button onClick={() => handleDeleteProject(project.id)}>Delete Project</button>
    </div>
  )
}

export default ProjectCard