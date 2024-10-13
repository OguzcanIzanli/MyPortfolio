import Logo from "../Logo";
import { useTheme } from "../../context/ThemeContext";
import IconLight from "../../assets/icons/IconLight";
import IconDark from "../../assets/icons/IconDark";
import IconClose from "../../assets/icons/IconClose";
import IconMenu from "../../assets/icons/IconMenu";
import { useEffect, useState } from "react";

const menuItems = [
  { text: "Home", color: "#12c2e9" },
  { text: "About", color: "#8a90ff" },
  { text: "Projects", color: "#e55dcb" },
  { text: "Contact", color: "#f64f59" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [expandNavbar, setExpandNavbar] = useState("");

  // Navbar Page Scroll Event
  document.addEventListener("scroll", () => {
    window.scrollY > 50
      ? setExpandNavbar("expand-navbar")
      : setExpandNavbar("");

    setNavbarOpen(true);
  });

  // Smooth scroll transition between sections on the page
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();

    const sectionId = event.currentTarget.getAttribute("href");

    if (sectionId) {
      document
        .querySelector(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Close the dropdown menu when click the document except navbar
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.clientY > 195) {
        setNavbarOpen(true);
      }
    });
  }, []);

  return (
    <div className={`navbar-container ${expandNavbar}`}>
      <div className={`navbar ${theme === "light" ? "light-nav" : "dark-nav"}`}>
        <a href="#home" className="logo">
          <Logo size={1.5} zIndex={1} />
        </a>

        <ul className={`nav-btns ${navbarOpen ? "menu-close" : "menu-open"}`}>
          <div
            style={{ color: theme === "light" ? "#fff" : "#ffdd1c" }}
            className="theme-btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <IconLight /> : <IconDark />}
          </div>

          {menuItems.map((item, index) => (
            <li
              key={index}
              style={
                {
                  "--color": item.color,
                  "--delay": index,
                } as React.CSSProperties
              }
            >
              <a
                className="nav-btn"
                onClick={handleClick}
                href={`#${item.text.toLowerCase()}`}
                data-text={`${item.text}`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="dropdown-menu-btn"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <IconMenu /> : <IconClose />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
