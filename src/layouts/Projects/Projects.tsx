import { useState } from "react";
import IconChevronsDown from "../../assets/icons/IconChevronsDown";
import { useTheme } from "../../context/ThemeContext";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  const { theme } = useTheme();
  const [viewProjects, setViewProjects] = useState(false);

  return (
    <div id="projects" className={`${theme ? "light-bg" : "dark-bg"}`}>
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <ProjectCard viewProjects={viewProjects} />
        <button
          onClick={() => setViewProjects(!viewProjects)}
          className="view-btn"
        >
          <IconChevronsDown className={viewProjects ? "rotate180deg" : ""} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
