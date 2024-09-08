import projects from "../../data/projects";
import IconGithub from "../../assets/icons/IconGithub";
import IconWebsite from "../../assets/icons/IconWebsite";

const Projects = () => {
  console.log(projects);
  return (
    <div id="projects" className="projects-container">
      <h1 className="layoutTitle">Projects</h1>

      <div className="card-container">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="project-name">{project.name}</div>
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
              style={{ "--color": project.bgColor } as React.CSSProperties}
              className="face face-down"
            >
              <div className="content">
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
    </div>
  );
};

export default Projects;
