import IconGithub from "../../assets/icons/IconGithub";
import IconLinkedin from "../../assets/icons/IconLinkedin";
import Logo from "../../components/Logo";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contactContainer">
        <div className="logo">
          <Logo size={3} zIndex={1} />
        </div>
        <div className="contact-left">
          <p>Let's create something beatiful together.</p>

          <div className="mail-whatsapp">
            <a
              className="email"
              href="mailto:oguzcanizanli@gmail.com"
              rel="noopener noreferrer"
            >
              oguzcanizanli@gmail.com
            </a>
            <a
              className="whatsapp-button"
              href="https://wa.me/905557632802"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="social-links">
            <h3>Connect with me:</h3>
            <div className="links">
              <div className="gitHub">
                <IconGithub />
              </div>
              <div className="linkedin">
                <IconLinkedin />
              </div>
            </div>
          </div>
        </div>
        <div className="contacy-right">
          <h1>Contact Me</h1>
          <h3>Oguzcan Izanli</h3>
          <h3>Front-End Developer</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
