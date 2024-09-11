import projects from "../../data/projects";
import IconGithub from "../../assets/icons/IconGithub";
import IconWebsite from "../../assets/icons/IconWebsite";
import Technologies from "../../components/Technologies";

type ProjectCardProps = {
  viewProjects: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ viewProjects }) => {
  return (
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
              <Technologies technologies={project.technologies} />

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
  );
};

export default ProjectCard;
