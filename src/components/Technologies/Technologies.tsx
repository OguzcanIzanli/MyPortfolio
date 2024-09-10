import IconReact from "../../assets/icons/Technologies/IconReact";
import IconAPI from "../../assets/icons/Technologies/IconAPI";
import IconBootstrap from "../../assets/icons/Technologies/IconBootstrap";
import IconContextAPI from "../../assets/icons/Technologies/IconContextAPI";
import IconHooks from "../../assets/icons/Technologies/IconHooks";
import IconJavascript from "../../assets/icons/Technologies/IconJavaScript";
import IconMaterialUi from "../../assets/icons/Technologies/IconMaterialUI";
import IconReactquery from "../../assets/icons/Technologies/IconReactquery";
import IconReactrouter from "../../assets/icons/Technologies/IconReactrouter";
import IconResponsive from "../../assets/icons/Technologies/IconResponsive";
import IconThemeToggle from "../../assets/icons/Technologies/IconThemeToogle";
import IconTypeScript from "../../assets/icons/Technologies/IconTypeScript";

interface TechnologiesProps {
  technologies: string[];
}

const icons: { [key: string]: React.FC } = {
  React: IconReact,
  API: IconAPI,
  Bootstrap: IconBootstrap,
  ContextAPI: IconContextAPI,
  Hooks: IconHooks,
  JavaScript: IconJavascript,
  MaterialUI: IconMaterialUi,
  Reactquery: IconReactquery,
  Reactrouter: IconReactrouter,
  Responsive: IconResponsive,
  ThemeToggle: IconThemeToggle,
  TypeScript: IconTypeScript,
};

const Technologies: React.FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <div className="technologies">
      {technologies.map((technology) => {
        const IconComponent = icons[technology];
        return (
          <div
            key={technology}
            className={`technology ${technology.toLowerCase()}`}
          >
            {IconComponent && <IconComponent />}
            {technology}
          </div>
        );
      })}
    </div>
  );
};

export default Technologies;
