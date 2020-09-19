import React, { Component, useEffect, useState } from "react";
import "./timer.css";

const Timer = ({ autostart = "false", startTime = 0, step = "1000" }) => {
  const [time, setTime] = useState(startTime);
  const [isActive, setIsActive] = useState(autostart);
  const changeState = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, step);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <div className="wrapper">
        <div className="timer">
          Left time: {time}, step: {step}ms
        </div>
        <button className="button" onClick={changeState}>
          {" "}
          {isActive ? "Pause" : "Start"} timer
        </button>
      </div>
    </>
  );
};

export default Timer;
