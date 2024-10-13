import IconGithub from "../../assets/icons/IconGithub";
import IconLinkedin from "../../assets/icons/IconLinkedin";
import IconMail from "../../assets/icons/IconMail";
import IconWhatsapp from "../../assets/icons/IconWhatsapp";
import Logo from "../../components/Logo";
import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div
      id="contact"
      className={`${theme === "light" ? "light-bg" : "dark-bg"}`}
    >
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>

        <div className="contact">
          <div className="logo">
            <Logo size={3} zIndex={1} />
          </div>
          <div className="contact-left">
            <p>Let's create something beautiful together.</p>

            <div className="mail-whatsapp">
              <a
                className="mail"
                href="mailto:oguzcanizanli@gmail.com"
                rel="noopener noreferrer"
              >
                <IconMail className="iconMail" />
                <span>oguzcanizanli@gmail.com</span>
              </a>
              <a
                className="whatsapp"
                href="https://wa.me/905557632802"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsapp className="iconWhatsapp" />
                <span>+905557632802</span>
              </a>
            </div>

            <div className="social-links">
              <h3>Connect with me:</h3>
              <div className="links">
                <a
                  href="https://github.com/OguzcanIzanli"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="gitHub"
                >
                  <IconGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/oguzcanizanli/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="linkedIn"
                >
                  <IconLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <h2>Oguzcan Izanli</h2>
            <h3>Front-End Developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
