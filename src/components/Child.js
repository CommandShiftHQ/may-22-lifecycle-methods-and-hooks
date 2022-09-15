import "../styles/child.css";
import Grandchild from "./Grandchild"

const Child = () => {
  return (
    <div className="child">
      <div className="child__title">
        Child component
      </div>
      <Grandchild />
    </div>
  );
};

export default Child;
