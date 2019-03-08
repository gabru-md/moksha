import React from "react";
import Countdown from "react-countdown-now";
import "./MokshaCountdown.css";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) return <p>Lol</p>;
  else
    return (
      <div className="align-middle content">
        <div className="countdown">
          <div className="countdown-item">{days}d</div>
          <div className="countdown-item">{hours}h</div>
          <div className="countdown-item hom">{minutes}m</div>
          <div className="countdown-item hom">{seconds}s</div>
        </div>
      </div>
    );
};

const MokshaCountdown = () => {
  return <Countdown renderer={renderer} date="Thu, 14 Mar 2019 00:00:00" />;
};

export default MokshaCountdown;
