import React, { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import "tachyons";
import "./Result.css";

const Screen = (props) => {
  const cent = useRef(null);
  useEffect(() => {
    TweenMax.from(cent.current, {
      y: "-100%",
      duration: 1,
      ease: "bounce",
    });
  });
  return (
    <div ref={cent} className="start">
      <div className="back pa2 ma2 tc">
        <form className="pa3 ma4 ">
          <h1 className="f1 red">GK-Quiz</h1>
          <button
            className=" pa2 br-pill dim pointer grow hover "
            onClick={() => props.onPress()}
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
    // </center>
  );
};

export default Screen;
