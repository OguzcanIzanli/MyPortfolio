import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <header className={`${theme == "dark" ? "bgDark" : ""}`}>
        <div className={`background ${theme}`}></div>
        {/* <div className="navbar">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div> */}
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
    </>
  );
}

export default App;
