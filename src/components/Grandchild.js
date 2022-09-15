import "../styles/grandchild.css";
import {useThemeContext} from "../contexts/ThemeContext";

const Grandchild = () => {
  const {useDarkTheme, setUseDarkTheme} = useThemeContext();

  const handleClick = () => {
    setUseDarkTheme(prev => !prev)
  }

  return (
    <div className="grandchild">
      <div className="grandchild__title">
        Grandchild component
      </div>
      theme: {useDarkTheme ? "use dark theme" : "use light theme"}
      <button onClick={handleClick}>Toggle theme</button>
    </div>
  );
};

export default Grandchild;
