import React, { useState, useEffect } from "react";
import Shuffle from "./Shuffle";
import "tachyons";

var css = "ma2 pa2 br-pill dim pointer grow hover w-20";

const Logic = (props) => {
  const [modified, setModified] = useState([]);
  const [color, setColor] = useState({});
  useEffect(() => {
    setModified(
      props.questions.map((data) => ({
        ...data,
        incorrect_answers: data.incorrect_answers.concat([data.correct_answer]),
      }))
    );
    setColor({ colors: [css, css, css, css] });
  }, [props.questions]);
  return (
    <div className="tc">
      {modified.length !== 0 ? (
        <Shuffle
          modified={modified}
          color={color}
          variableHandler={(data) => props.variableHandler(data)}
          correctHandler={() => props.correctHandler()}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Logic;
