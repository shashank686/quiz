import React, { useState } from "react";
import Screen from "./components/Screen";
import StartScreen from "./components/StartScreen";
import Line from "./components/Line";
import "./App.css";
import Ashish from "./components/ashish";

const App = () => {
  const [change, setChange] = useState(false);

  const onPress = () => {
    setChange(true);
  };

  return (
    /*<div className="wrapper">
      {change === false ? <Screen onPress={onPress} /> : <StartScreen />}
    </div>*/
    /*<Line />*/
    <Ashish />
  );
};

export default App;
