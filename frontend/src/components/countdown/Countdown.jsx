import React, { useState, useEffect } from "react";
import "./count.css";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-08-30T00:00:00");
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="countdown">
        <div className="imgs">
          {/* <img src="" alt="" className="inside_img" /> */}
        </div>

        <div className="casper">
          <img
            src="https://i.imgur.com/T8zWy9q.png"
            alt=""
            className="it_top"
          />
          <h1 className="title ddd">Let the countdown begin</h1>

          <div className="count_grid">
            <div className="count_sub">
              <h2 className="count_time">{timeLeft.days}</h2>
              <h3 className="counter">days</h3>
            </div>

            <div className="count_sub">
              <h2 className="count_time">{timeLeft.hours}</h2>
              <h3 className="counter">hours</h3>
            </div>

            <div className="count_sub">
              <h2 className="count_time">{timeLeft.minutes}</h2>
              <h3 className="counter">minutes</h3>
            </div>

            <div className="count_sub">
              <h2 className="count_time">{timeLeft.seconds}</h2>
              <h3 className="counter">seconds</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bottomly">
        <button className="master">rsvp</button>
        <button className="master">travel Info</button>
      </div>
    </div>
  );
};

export default Countdown;
