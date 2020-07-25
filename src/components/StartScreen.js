import React, { useState, useEffect } from "react";
import Logic from "./Logic";
import "tachyons";
import Result from "./Result";
import "./Result.css";
import Timer from "./Timer";

const StartScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [variable, setVariable] = useState("");
  const [result, setResult] = useState(true);
  const [correct, getCorrect] = useState(0);
  const [start, setStart] = useState(true);
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((resp) => resp.json())
      .then((data) => setQuestions(data.results))
      .catch((e) => console.log(e.message));
  }, []);

  const variableHandler = (data) => {
    setVariable(data);
    setResult(false);
    setQuestions([]);
  };
  const correctHandler = () => {
    getCorrect((prev) => prev + 1);
  };
  return (
    <div className="tc">
      {questions.length !== 0 && result === true ? (
        <div className="wrapp">
          <Timer
            start={start}
            setStart={(data) => setStart(data)}
            variableHandler={(data) => variableHandler(data)}
          />
          <Logic
            questions={questions}
            variableHandler={(data) => variableHandler(data)}
            correctHandler={() => correctHandler()}
          />
        </div>
      ) : (
        <Result variable={variable} result={result} correct={correct} />
      )}
    </div>
  );
};

export default StartScreen;
