import HTML from "../../assets/images/skills/html5.svg";
import CSS from "../../assets/images/skills/css3.svg";
import JavaScript from "../../assets/images/skills/javascript.svg";
import TypeScript from "../../assets/images/skills/typescript.svg";
import React from "../../assets/images/skills/react.svg";
import SASS from "../../assets/images/skills/sass.svg";
import Tailwind from "../../assets/images/skills/tailwindcss.svg";
import Bootstrap from "../../assets/images/skills/bootstrap.svg";
import Git from "../../assets/images/skills/git.svg";
import ProfileImg from "../../assets/images/profile-image.png";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
  const skills = [
    HTML,
    CSS,
    JavaScript,
    TypeScript,
    React,
    SASS,
    Tailwind,
    Bootstrap,
    Git,
  ];

  const { theme } = useTheme();

  return (
    <div id="about" className={`${theme ? "light-bg" : "dark-bg"}`}>
      <div className="about-container">
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <div className="profile-image">
            <img src={ProfileImg} alt="" />
          </div>
          <div className="about-me">
            <p className="cover-letter">
              With a solid background in chemical engineering and strong skills
              in front-end development, I am determined to succeed in this
              field. Skilled in <strong>HTML</strong>, <strong>CSS</strong>,{" "}
              <strong>JavaScript</strong>, <strong>TypeScript</strong>, and{" "}
              <strong>React</strong>, I am prepared to face new challenges. My
              previous experience has improved my project management and
              teamwork abilities, providing a strong foundation for success in
              my new career. With a passion for creating engaging user
              experiences, I am excited to leverage my diverse background and
              technical skills to contribute meaningfully to front-end
              development projects.
            </p>
          </div>
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="skill">
              <img key={index} src={skill} alt={skill} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
