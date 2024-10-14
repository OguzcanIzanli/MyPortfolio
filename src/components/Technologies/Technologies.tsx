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
import IconNextjs from "../../assets/icons/Technologies/IconNextjs";
import IconWebpack from "../../assets/icons/Technologies/IconWebpack";
import IconWebhook from "../../assets/icons/Technologies/IconWebhook";
import IconFirebase from "../../assets/icons/Technologies/IconFirebase";
import IconSass from "../../assets/icons/Technologies/IconSass";
import IconTailwind from "../../assets/icons/Technologies/IconTailwind";

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
  Nextjs: IconNextjs,
  Webpack: IconWebpack,
  Webhook: IconWebhook,
  Firebase: IconFirebase,
  SASS: IconSass,
  Tailwind: IconTailwind,
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
