import React from "react";
import "./count.css";
const Countdown = () => {
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
          <h1 className="title  ddd">Let the countdown begin</h1>

          <div className="count_grid">
            <div className="count_sub">
              <h2 className="count_time">2</h2>
              <h3 className="counter">days</h3>
            </div>

            <div className="count_sub">
              <h2 className="count_time">22</h2>
              <h3 className="counter">hours</h3>
            </div>

            <div className="count_sub">
              <h2 className="count_time">2</h2>
              <h3 className="counter">minutes</h3>
            </div>

            <div className="count_sub">
              <h2 className="count_time">2</h2>
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
