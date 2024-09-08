import projects from "../../data/projects";

const Projects = () => {
  console.log(projects);
  return (
    <div id="projects" className="projectsContainer">
      <h1 className="layoutTitle">Projects</h1>

      <div className="cardContainer">
        {projects.map((project) => (
          <div key={project.name} className="card">
            <div className="projectName">{project.name}</div>
            <div className="face face1">
              <div
                style={
                  {
                    background: project.media,
                    backgroundSize: "contain",
                  } as React.CSSProperties
                }
                className="content"
              ></div>
            </div>
            <div className="face face2">
              <div className="content">
                <p>{project.description}</p>
                <a href={project.github} target="_blank">
                  Github
                </a>
                <a href={project.live} target="_blank">
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
