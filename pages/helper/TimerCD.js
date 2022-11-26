import { React, useEffect, useRef, useState } from "react";
function TimerCD(props) {
  const intervalRef = useRef(null);
  const [timer, settimer] = useState("00:00:00");
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    const days = Math.floor(total / ((1000 * 60 * 60) % 24));
    return { total, days, hours, minutes, seconds };
  }
  function startTimer(deadline) {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      settimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      clearInterval(intervalRef.current);
    }
  }

  function clearTimer(endtime) {
    settimer("00:25:00");
    if (intervalRef.current) clearInterval(intervalRef.current);
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  }
  function getDeadlineTime() {
    let deadline = new Date();
    // deadline.setSeconds(deadline.getSeconds() + 10);
    deadline.setMinutes(deadline.getMinutes() + 25);
    return deadline;
  }

  useEffect(() => {
    clearTimer(getDeadlineTime());

    return () => {
      {
        if (intervalRef.current) {
          clearInterval(intervalRef);
        }
      }
    };
  }, []);

  console.log(props);
  useEffect(() => {
    let interval = setInterval(() => {
      settimer(timer - 1);
    }, 1000);

    return clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "right" }}>
      <h2>{timer}</h2>
    </div>
  );
}
export default TimerCD;
