import { useEffect, useState } from "react";

type Project = {
  name: string;
  role: string;
  image: string;
  url?: string;
  bullets: string[];
};

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  return (
    <>
      <div className="projectList">
        {projects.map((project) => (
          <button
            className="projectItem"
            type="button"
            key={project.name}
            onClick={() => setSelectedProject(project)}
            aria-haspopup="dialog"
          >
            <div className="projectItemTop">
              <div className="projectItemLeft">
                <h1>{project.name}</h1>
                <p>{project.role}</p>
              </div>
              <div className="projectItemRight">
                <img src={project.image} alt={`${project.name} project`} />
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div className="projectOverlay" role="presentation" onClick={() => setSelectedProject(null)}>
          <section
            className="projectModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="projectModalClose"
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              x
            </button>
            <div className="projectModalHeader">
              <img
                className={selectedProject.name === "Argus" ? "projectModalLogoDark" : undefined}
                src={selectedProject.image}
                alt=""
              />
              <div>
                <h2 id="project-modal-title">{selectedProject.name}</h2>
                <p>{selectedProject.role}</p>
              </div>
            </div>
            <ul className="projectModalList">
              {selectedProject.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {selectedProject.url && (
              <a
                className="projectModalLink"
                href={selectedProject.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit {selectedProject.name}
              </a>
            )}
          </section>
        </div>
      )}
    </>
  );
}
