"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStorageItem } from "../../utils/storage";
import {
  createProject,
  listProjects,
  deleteProject,
} from "../../services/project.service";
import { deleteTasksByProject } from "../../services/task.service";
import { Project } from "../../types/Project";
import ProjectCard from "./ProjectCard";
import Stats from "./Stats";
import styles from "./page.module.css";
import Input from "../../components/Input";
import Button from "../../components/Button";
import SearchBar from "./SearchBar";

const page = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const filteredProjects = projects.filter((project) =>
    project.name.includes(search.toLowerCase()),
  );

  useEffect(() => {
    let isSaved = getStorageItem("email");
    if (!isSaved) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    setProjects(listProjects());
  }, []);

  function handleDeleteProject(projectId: string) {
    deleteTasksByProject(projectId);
    deleteProject(projectId);
    setProjects(listProjects());
    console.log(projectId);
  }

  return (
    <div className={styles.page}>
      <Stats />
      <div className={styles.header}>
        <div className={styles.searchContainer}>
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <form
          className={styles.formAddProjects}
          onSubmit={(e) => {
            e.preventDefault();
            createProject(name);
            setProjects(listProjects());
          }}
        >
          <Input
            type="text"
            Icon="deployed_code"
            placeholder="Add Project"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit" value="Add Project" />
        </form>
      </div>

      
        {filteredProjects.length !== 0 ? (
          <div className={styles.projectsGrid}>
{            filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              handleDeleteProject={handleDeleteProject}
            />
          ))}
          </div>
        ) : (
          <p className={styles.nothingP}>Cant find any Projects...</p>
        )}
      
    </div>
  );
};

export default page;
