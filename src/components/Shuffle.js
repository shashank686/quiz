import React, { useState, useEffect, useRef } from "react";
import wrongAnswer from "../assets/wrong.mp3";
import { TweenMax } from "gsap";
import "./Result.css";
import "tachyons";

var css = "ma2 pa2 br-pill dim pointer grow hover w-20";
var css1 = "ma2 pa2 br-pill dim pointer grow hover w-20 bg-light-green";
var css2 = "ma2 pa2 br-pill dim pointer grow hover w-20 bg-orange";

const shuffleArray = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
const findIndex = (array, value) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
};

const parseUTF3 = (encodedStr) =>
  new DOMParser().parseFromString(encodedStr, "text/html").body.textContent;

const Shuffle = (props) => {
  var array = props.modified[0].incorrect_answers;
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(props.color);
  const [shuffled, setShuffled] = useState(shuffleArray([]));
  const [display, setDisplay] = useState(true);
  const [rightKey, setRightkey] = useState(0);
  const [wrongKey, setWrongKey] = useState(0);
  const [working, setWorking] = useState(false);
  const [playing] = useState(true);
  const [audio] = useState(new Audio(wrongAnswer));
  const queCss = useRef(null);
  const [pause, setPause] = useState(false);
  const buttonCss = useRef(null);

  const buzzer = () => {
    playing ? audio.play() : audio.pause();
  };

  useEffect(() => {
    TweenMax.from(queCss.current, 0.5, { y: "-100%" });
    TweenMax.from(buttonCss.current, 0.5, {
      y: "300%",
      stagger: 0.5,
      delay: 0.5,
    });
  }, [pause]);
  useEffect(() => {
    setShuffled([...shuffleArray(array)]);
  }, []);

  const clickHandler = () => {
    setWorking(false);

    console.log(shuffled);
    if (working === false) {
      alert("Choose an option");
    } else {
      setPause((prev) => !prev);
      if (count < props.modified.length - 1) {
        setCount((prev) => prev + 1);
        setShuffled([
          ...shuffleArray(props.modified[count + 1].incorrect_answers),
        ]);
        setColor({ ...color, ...(color.colors[rightKey] = css) });
        setColor({ ...color, ...(color.colors[wrongKey] = css) });
        setRightkey(0);
        setWrongKey(0);
      } else {
        setDisplay(false);
        //showText = <h1>The end</h1>;
        props.variableHandler("The end");
      }
    }
  };

  const answerHandler = (button) => {
    var name = button.target.id;

    var indexOfButton = parseInt(button.target.value);
    setWorking(true);
    if (name === props.modified[count].correct_answer) {
      setColor({ ...color, ...(color.colors[indexOfButton] = css1) });
      setRightkey(indexOfButton);
      props.correctHandler();
    } else {
      var rightIndex = findIndex(
        shuffled,
        props.modified[count].correct_answer
      );

      setColor({ ...color, ...(color.colors[indexOfButton] = css2) });
      setColor({ ...color, ...(color.colors[rightIndex] = css1) });
      setRightkey(rightIndex);
      setWrongKey(indexOfButton);
      buzzer();
    }
  };
  return (
    <div className="tc">
      {display ? (
        <div>
          <div>
            <h1 className="monospace" ref={queCss}>
              {parseUTF3(count + 1 + ") " + props.modified[count].question)}
            </h1>
            <div ref={buttonCss}>
              {shuffled.map((home, index) => (
                <div key={home}>
                  <button
                    id={home}
                    className={color.colors[index]}
                    value={index}
                    disabled={working}
                    onClick={(e) => answerHandler(e)}
                  >
                    {parseUTF3(home)}
                  </button>
                </div>
              ))}
              <div className="pt2 tc ma2">
                <button className="w-9 pa2" onClick={clickHandler}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Shuffle;
