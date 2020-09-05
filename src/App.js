import React, { useState } from "react";
import Screen from "./components/Screen";
import StartScreen from "./components/StartScreen";
import "./App.css";

const App = () => {
  const [change, setChange] = useState(false);
  const onPress = () => {
    setChange(true);
  };

  return (
    <div className="wrapper">
      {change === false ? <Screen onPress={onPress} /> : <StartScreen />}
    </div>
  );
};

export default App;
