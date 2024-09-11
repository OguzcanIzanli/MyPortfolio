import projects from "../../data/projects";
import IconGithub from "../../assets/icons/IconGithub";
import IconWebsite from "../../assets/icons/IconWebsite";
import Technologies from "../../components/Technologies";

type ProjectCardProps = {
  showMore: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ showMore }) => {
  return (
    <div className={`card-container ${showMore ? "show-more" : "show-less"}`}>
      {projects.map((project, index) => (
        <div
          key={project.name}
          className={`project-card ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="project-content">
            {/* Face Title - start */}
            <div
              style={{ "--color": project.color } as React.CSSProperties}
              className="face face-title"
            >
              <div className="project-name">{project.name}</div>
            </div>
            {/* Face Title - end*/}

            {/* Face up - start*/}
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
            {/* Face up - end */}

            {/* Face down - start */}
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
            {/* Face down - end */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
