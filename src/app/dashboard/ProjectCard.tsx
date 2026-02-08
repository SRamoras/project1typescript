import React from 'react'
import { Project } from "../../types/Project"
import Link from "next/link";
import "./ProjectCard.css"
type ProjectCardProps = {
  project: Project;
  handleDeleteProject: (id: string) => void
};

const ProjectCard = ({project, handleDeleteProject}: ProjectCardProps) => {
  return (
    <div className="project-card-container">
      <Link href={`/dashboard/projects/${project.id}`} className="project-card">
        <img src="/images/folder.png" alt="folder" />
        <p>{project.name}</p>
      </Link>

      <button
        className="delete-btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleDeleteProject(project.id);
        }}
      >
        <span className="material-symbols-outlined">
          close
        </span>
      </button>
    </div>
  )
}
export default ProjectCard