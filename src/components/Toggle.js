import React, { useState } from "react";


function Toggle() {
  const [isOn, setIsOn] = useState(true);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";
 
  

  return <button onClick={handleClick} style={{ background: color }}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
