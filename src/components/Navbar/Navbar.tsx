import Logo from "../Logo";
import { useTheme } from "../../context/ThemeContext";
import IconLight from "../../assets/icons/IconLight";
import IconDark from "../../assets/icons/IconDark";

const menuItems = [
  { text: "Home", color: "#60a5fa" },
  { text: "About", color: "#e879f9" },
  { text: "Projects", color: "#5eead4" },
  { text: "Contact", color: "#ffdd1c" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="containerNavbar">
      <div className={`navbar ${theme === "light" ? "lightNav" : "darkNav"}`}>
        <div className="logo">
          <Logo size={1.5} zIndex={1} />
        </div>
        <ul className="navBtns">
          <div
            style={{ color: theme === "light" ? "#fff" : "#ffdd1c" }}
            className="themeBtn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <IconDark /> : <IconLight />}
          </div>
          {menuItems.map((item, index) => (
            <li
              key={index}
              style={
                { "--clr": item.color, "--delay": index } as React.CSSProperties
              }
            >
              <a
                className={`navBtn ${
                  theme === "light" ? "lightNavBtn" : "darkNavBtn"
                }`}
                href="#"
                data-text={`${item.text}`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
