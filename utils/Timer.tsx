import { useState, useEffect } from "react";



export default function Timer({timestamp}: {timestamp: number}) {
  const [counter, setCounter] = useState(0);

  const [timer, setTimer] = useState("00:00:00:00");

  useEffect(() => {
    if (counter === 0) {
      setCounter(timestamp);
    }

    counter > 0 && setTimeout(() => setCounter((counter - 1)), 1000);
  }, [counter, timestamp]);

  function FormatToTimer(){
    if (counter < 0) return setTimer("00:00")
    // formats counter to dd:hh:mm:ss

    // days
    const days = Math.floor(counter / 86400);
    // hours
    const hours = Math.floor((counter % 86400) / 3600);
    // minutes
    const minutes = Math.floor(((counter % 86400) % 3600) / 60);
    // seconds
    const seconds = Math.floor(((counter % 86400) % 3600) % 60);

    // formats to 00:00:00:00
    const formatted = `${minutes}:${seconds}`;

    setTimer(formatted);
  }

  useEffect(() => {
    FormatToTimer();
  }, [counter]);

  return <>{timer}</>
}