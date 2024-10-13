import { useTheme } from "../../context/ThemeContext";
import IconGithub from "../../assets/icons/IconGithub";
import IconLinkedin from "../../assets/icons/IconLinkedin";
import IconLink from "../../assets/icons/IconLink";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div id="home" className={`${theme === "light" ? "light-bg" : "dark-bg"}`}>
      <div
        className={`${theme === "light" ? "light-anim-bg" : "dark-anim-bg"}`}
      ></div>

      <div className="hero-container">
        <h3>Hello!</h3>
        <h1>I'm Oguzcan Izanli</h1>
        <h3>A Front-End Developer</h3>
        <p>
          I am a Front-End Developer who is passionate about building
          user-friendly and attractive websites. I am always open to learning
          new things and improving my skills. I work well in a team and enjoy
          contributing to projects. I am currently looking for full-time job
          opportunities where I can grow as a developer.
        </p>

        <div className="links">
          <div className="social-media">
            <a
              href="https://github.com/OguzcanIzanli"
              rel="noopener noreferrer"
              target="_blank"
              style={{ "--delay": 1 } as React.CSSProperties}
              className="github"
            >
              <IconGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/oguzcanizanli/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ "--delay": 2 } as React.CSSProperties}
              className="linkedIn"
            >
              <IconLinkedin />
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1KVEPIcgQ4inm5iRI8bWx9EJJSIQOmT5v/view"
            rel="noopener noreferrer"
            target="_blank"
            className="resume"
          >
            <IconLink />
            <span>resume</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
