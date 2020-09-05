import React from "react";

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
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
      this.props.setStart(false);
    }
  }

  countDown() {
    let seconds = this.state.seconds - 1;

    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    if (seconds === 0) {
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
