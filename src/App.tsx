import "./scss/main.scss";
import Navbar from "./components/Navbar";
import Hero from "./layouts/Hero";
import About from "./layouts/About";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
