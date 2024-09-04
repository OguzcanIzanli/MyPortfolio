import "./scss/main.scss";
import Navbar from "./components/Navbar";
import About from "./layouts/About";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <Navbar />
      <header className={`${theme === "dark" ? "darkBg" : "lightBg"}`}>
        <div className={`${theme}`}></div>

        <div className="content">
          <h1>An awesome title</h1>
        </div>
      </header>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
