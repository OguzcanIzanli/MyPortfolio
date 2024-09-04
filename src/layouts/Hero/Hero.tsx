import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === "light" ? "lightBg" : "darkBg"}`}>
      <div
        className={`${theme === "light" ? "lightAnimBg" : "darkAnimBg"}`}
      ></div>

      <div className="container">
        <div className="hero-content">
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
