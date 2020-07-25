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
    <center ref={cent} className=" pa6 start">
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
    </center>
  );
};

export default Screen;
/*
tc ma6 pa5 pl7 w-70 
<article className="vh-100 dt w-100">
      <div className="dtc v-mid tc ph3 ph4-l">
        <form className="shadow-2 pa4">
          <h1 className="f1">GK-Quiz</h1>
          <button
            className=" pa2 br-pill dim pointer grow hover "
            onClick={() => props.onPress()}
          >
            Start Quiz
          </button>
        </form>
      </div>
    </article>

*/
