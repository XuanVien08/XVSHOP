import React, { useEffect, useState } from "react";
import { DAY, HOURS, MINUTES, SECONDS } from "../../constants";

const Clock = () => {
  const [countDown, setCountDown] = useState({});
  let interval;

  const onCountDown = () => {
    const destination = new Date("12 30,2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = `0${Math.floor(different / DAY)}`.slice(-2);
      const hours = `0${Math.floor((different % DAY) / HOURS)}`.slice(-2);
      const minutes = `0${Math.floor((different % HOURS) / MINUTES)}`.slice(-2);
      const seconds = `0${Math.floor((different % MINUTES) / SECONDS)}`.slice(
        -2
      );
      if (different < 0) {
        clearInterval(interval);
        setCountDown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        setCountDown({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    });
  };

  useEffect(() => {
    onCountDown();
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h4 className="text-white fs-3 mb-2">{countDown.days}</h4>
          <h5 className="text-white fs-6">Days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h4 className="text-white fs-3 mb-2">{countDown.hours}</h4>
          <h5 className="text-white fs-6">Hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>{" "}
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h4 className="text-white fs-3 mb-2">{countDown.minutes}</h4>
          <h5 className="text-white fs-6">Minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h4 className="text-white fs-3 mb-2">{countDown.seconds}</h4>
          <h5 className="text-white fs-6">Seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
