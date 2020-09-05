import React from "react";
import "tachyons";
import "./Result.css";
import Loading from "./Loading";
const feedback = (data) => {
  console.log("ka=> ", typeof data);
  console.log(data);

  if (data === 10) {
    return <h1 className="green">Awesome you are a champ !!</h1>;
  } else if (data > 7 && data < 10) {
    return <h1 className="yellow">Awesome you too close to be a champ!!</h1>;
  } else if (data >= 5 && data <= 7) {
    return <h1 className="blue">Keep pushing hard you can do it!!</h1>;
  } else {
    return <h1 className="red">Practice makes a man perfect!!</h1>;
  }
};

const Result = (props) => {
  return (
    <div>
      {!props.result ? (
        <div className="result">
          <div className="tc">
            <h1>{props.variable}</h1>
            {feedback(props.correct)}
          </div>
          <h1 className="green">Correct Answers</h1>
          <div class="split-container ">
            <div className="child-split tc pa2">
              <h1>{props.correct}</h1>
            </div>
            <div className="child-split  tc pa2">
              <h1>10</h1>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Result;
