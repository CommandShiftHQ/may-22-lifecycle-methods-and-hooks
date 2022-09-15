import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/app.css";
import Child from "../components/Child";

import { ThemeContextProvider } from "../contexts/ThemeContext";

const App = () => {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("loaded");
    axios.get("https://random-word-api.herokuapp.com/word").then((res) => {
      setWord(res.data[0]);
    });
    return () => {
      setWord("");
    };
  }, []);

  useEffect(() => {
    console.log("reloaded");
  }, [count]);

  return (
    <ThemeContextProvider>
      <div className="app">
        <div className="app__container">Lets look at some hooks!</div>
        <div className="app__container">
          <div className="app__container-title">useState</div>
          <div>Current count: {count}</div>
          <button onClick={handleClick}>click me!</button>
        </div>
        <div className="app__container">
          <div className="app__container-title">useEffect</div>
          <div>Fetched word: {word}</div>
        </div>
        <div className="app__container">
          <div className="app__container-title">useContext</div>
          <Child />
        </div>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
