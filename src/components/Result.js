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
    <div className="tc ma6 ">
      {!props.result ? (
        <div>
          <form className="ma4 pa6 shadow-2 ">
            <p>{props.variable}</p>
            <p className="green">Correct Answers :{props.correct} </p>
            {feedback(props.correct)}
          </form>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Result;
