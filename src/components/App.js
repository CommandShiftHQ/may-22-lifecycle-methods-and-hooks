import { useState } from "react";
import "../styles/app.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="app">
      <div className="app__container">Lets look at some hooks!</div>
      <div className="app__container">
        <div className="app__container-title">useState</div>
        <div>Current count: {count}</div>
        <button onClick={handleClick}>click me!</button>
      </div>
    </div>
  );
};

export default App;
