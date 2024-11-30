import { useState } from "react";
import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projectsState }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}> + Add Project </Button>
      </div>
      <ul className="mt-8">
        {projectsState.projects?.map((project, key) => {
          let buttonClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === +projectsState.selectedProjectId) {
            buttonClass += " active";
          }

          return (
            <li key={key}>
              <button className={buttonClass}>{project.title}</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
