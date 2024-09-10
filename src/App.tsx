import "./scss/main.scss";
import Navbar from "./components/Navbar";
import Hero from "./layouts/Hero";
import About from "./layouts/About";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
