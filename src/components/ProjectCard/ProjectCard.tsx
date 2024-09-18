// import projects from "../../data/projects";
import { useEffect, useState } from "react";
import IconGithub from "../../assets/icons/IconGithub";
import IconWebsite from "../../assets/icons/IconWebsite";
import Technologies from "../../components/Technologies";

type ProjectCardProps = {
  showMore: boolean;
};

type Project = {
  name: string;
  description: string;
  live: string;
  github: string;
  media: string;
  color: string;
  technologies: string[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ showMore }) => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      console.log("Fetching project data...");

      await new Promise((resolve) => setTimeout(resolve, 3000));

      const response = await fetch("api/projects.json");
      const result = await response.json();
      console.log("Data fetch completed.", result);

      setData(result);
    } catch (error) {
      console.log("Database Error:", error);
      throw new Error("Failed to fetch project data.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="projects-loading">Projects Loading...</div>;
  }

  return (
    <>
      {!loading && (
        <div
          className={`card-container ${showMore ? "show-more" : "show-less"}`}
        >
          {data.map((project, index) => (
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
      )}
    </>
  );
};

export default ProjectCard;
