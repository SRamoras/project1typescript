import React from 'react'
import { Project } from "../../types/Project"
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  deleteProject: (id: string) => Project[];
};

const ProjectCard = ({project, setProjects, deleteProject}: ProjectCardProps) => {
  return (
    <div>
        <Link href={`/dashboard/projects/${project.id}`}>
          <p>{project.name}</p>
        </Link>
          <button onClick={() => setProjects(deleteProject(project.id))}>Delete Project</button>
    </div>
  )
}

export default ProjectCard