import { useState } from "react";
import IconChevronsDown from "../../assets/icons/IconChevronsDown";
import { useTheme } from "../../context/ThemeContext";
import ProjectCard from "../../components/ProjectCard";

const Projects = () => {
  const { theme } = useTheme();
  const [showMore, setShowMore] = useState(false);

  return (
    <div
      id="projects"
      className={`${theme === "light" ? "light-bg" : "dark-bg"}`}
    >
      <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <ProjectCard showMore={showMore} />
        <button onClick={() => setShowMore(!showMore)} className="view-btn">
          <IconChevronsDown className={showMore ? "rotate180deg" : ""} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
