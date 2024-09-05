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

  return (
    <div id="about" className="aboutContainer">
      <h1 className="layoutTitle">About Me</h1>
      <div className="aboutContent">
        <div className="profileImage">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="aboutMe">
          <h3 className="name">Oguzcan Izanli</h3>
          <p className="coverLetter">
            With a solid background in chemical engineering and strong skills in
            front-end development, I am determined to succeed in this field.
            Skilled in <span>HTML</span>, <span>CSS</span>,{" "}
            <span>JavaScript</span>, <span>TypeScript</span>, and{" "}
            <span>React</span>, I am prepared to face new challenges. My
            previous experience has improved my project management and teamwork
            abilities, providing a strong foundation for success in my new
            career. With a passion for creating engaging user experiences, I am
            excited to leverage my diverse background and technical skills to
            contribute meaningfully to front-end development projects.
          </p>

          <div className="skills">
            {skills.map((skill, index) => (
              <img key={index} src={skill} alt={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
