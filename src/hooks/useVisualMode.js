import { useState } from "react"

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {

    if (replace === false) {
      setHistory(history => [...history, newMode])
      
    } else {
      let historyCopy = [...history];
      setHistory((history) => [...historyCopy.slice(0, history.length - 1), newMode]);

    }
    setMode(newMode);
  }

  function back() {
    setHistory(prev => {
      let historyCopy = [...prev];
      if (historyCopy.length === 1) {
        return historyCopy;
      } else {

      }
      historyCopy.pop();
      setMode(historyCopy[historyCopy.length - 1]);
      return historyCopy;
    });
  }

  return {
    mode,
    transition,
    back
  };
}