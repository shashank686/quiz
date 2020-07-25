import React, { useState, useEffect } from "react";
/*
const secondsToTime = (secs) => {
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj;
};

const Timer = (props) => {
  const [state, getState] = useState({ time: {}, seconds: 600 });
  const [timer, setTimer] = useState(() => (x) =>);

  useEffect(() => {
    let timeLeftVar = secondsToTime(state.seconds);
    getState(timeLeftVar);
  });

  const startTimer = () => {
    if (timer == 0 && state.seconds > 0) {
      console.log("hello");
      console.log(timer);
      setTimer(() => (countDown) => setInterval(countDown, 1000));
      props.setStart(false);
    }
  };

  const countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = state.seconds - 1;
    getState({
      time: secondsToTime(seconds),
      seconds: seconds,
    });
  };

  // Check if we're at zero.
  if (state.seconds == 0) {
    clearInterval(timer);
  }

  return (
    <div>
      {props.start ? (
        startTimer()
      ) : (
        <div>
          m: {state.time.m} s: {state.time.s}
        </div>
      )}
    </div>
  );
};

export default Timer;
*/

class Timer extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 600 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
      this.props.setStart(false);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;

    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
      this.props.variableHandler("The End!!");
    }
  }

  render() {
    return (
      <div className="tr pa4">
        {this.props.start ? (
          this.startTimer()
        ) : (
          <div>
            {this.state.time.m}:{this.state.time.s}
          </div>
        )}
      </div>
    );
  }
}

export default Timer;
