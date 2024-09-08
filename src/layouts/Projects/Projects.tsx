import projects from "../../data/projects";
import IconGithub from "../../assets/icons/IconGithub";
import IconWebsite from "../../assets/icons/IconWebsite";
import Technologies from "../../components/Technologies";
import { useState } from "react";
import IconChevronsDown from "../../assets/icons/IconChevronsDown";

const Projects = () => {
  const [viewProjects, setViewProjects] = useState(false);

  return (
    <div id="projects" className="projects-container">
      <h1 className="layoutTitle">Projects</h1>

      <div
        className={`card-container ${
          viewProjects ? "card-showall" : "card-showless"
        }`}
      >
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div
              style={{ "--color": project.color } as React.CSSProperties}
              className="face face-title"
            >
              <div className="project-name">{project.name}</div>
            </div>
            <div className="face face-up">
              <div
                style={
                  {
                    background: project.media,
                    backgroundSize: "contain",
                  } as React.CSSProperties
                }
                className="project-image"
              ></div>
            </div>
            <div
              style={{ "--color": project.color } as React.CSSProperties}
              className="face face-down"
            >
              <div className="content">
                <div className="technologies">
                  {project.technologies.map((technology) => (
                    <div
                      key={technology}
                      className={`technology ${technology.toLowerCase()}`}
                    >
                      <Technologies technology={technology} /> {technology}
                    </div>
                  ))}
                </div>

                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank">
                    <span>
                      <IconGithub /> GitHub
                    </span>
                  </a>
                  <a href={project.live} target="_blank">
                    <span>
                      <IconWebsite /> Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setViewProjects(!viewProjects)}
        className="view-btn"
      >
        <IconChevronsDown className={viewProjects ? "rotate180deg" : ""} />
      </button>
    </div>
  );
};

export default Projects;
