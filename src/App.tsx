import { useState } from "react";
import "./scss/main.scss";
import IconStar from "../src/assets/icons/IconStar";
import About from "./layouts/About";
import Projects from "./layouts/Projects";
import Contact from "./layouts/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  const menuItems = [
    { text: "Home", color: "#60a5fa" },
    { text: "About", color: "#e879f9" },
    { text: "Projects", color: "#5eead4" },
    { text: "Contact", color: "#ffdd1c" },
  ];

  return (
    <>
      <div className="containerNavbar">
        <div className="navbar">
          <div className="logo">
            <IconStar className="iconStar" />
          </div>
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                style={{ "--clr": item.color } as React.CSSProperties}
              >
                <a href="#" data-text={`${item.text}`}>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <header className={`${theme === "dark" ? "darkBg" : "lightBg"}`}>
        <div className={`${theme}`}></div>

        <div className="content">
          <h1>An awesome title</h1>
          <div
            className="themeBtn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            Switch
          </div>
        </div>
      </header>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
