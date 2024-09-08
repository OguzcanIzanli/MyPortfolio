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
  technology: string;
}

const Technologies: React.FC<TechnologiesProps> = ({ technology }) => {
  switch (technology) {
    case "React":
      return <IconReact />;
    case "API":
      return <IconAPI />;
    case "Bootstrap":
      return <IconBootstrap />;
    case "ContextAPI":
      return <IconContextAPI />;
    case "Hooks":
      return <IconHooks />;
    case "JavaScript":
      return <IconJavascript />;
    case "MaterialUI":
      return <IconMaterialUi />;
    case "Reactquery":
      return <IconReactquery />;
    case "Reactrouter":
      return <IconReactrouter />;
    case "Responsive":
      return <IconResponsive />;
    case "ThemeToggle":
      return <IconThemeToggle />;
    case "TypeScript":
      return <IconTypeScript />;
    default:
      return null;
  }
};

export default Technologies;
