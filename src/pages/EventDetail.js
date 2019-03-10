import React, { Component } from "react";
import * as firebase from "firebase/app";
import "firebase/database";
import "./EventDetail.css";

const PreLoader = () => {
  return (
    <div className="event-preloader">
      <img src="/spinner.gif" alt="" />
    </div>
  );
};

class EventDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { event: false };
  }

  backgroundParser = name =>
    name
      .split("'")
      .join("")
      .split(":")[0]
      .trim()
      .toLowerCase() + "-min.jpg";

  componentDidMount() {
    const { eventName } = this.props.match.params;
    firebase
      .database()
      .ref("events")
      .orderByChild("eventName")
      .equalTo(decodeURIComponent(eventName))
      .on("value", snap => {
        const key = Object.keys(snap.val())[0];
        this.setState({ event: snap.val()[key] });
      });
  }

  renderRegBtn(regLink) {
    if (regLink !== "None")
      return (
        <a
          href={regLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-default btn-warning"
          style={{ color: "white", fontWeight: "500" }}
        >
          Register
        </a>
      );
  }

  render() {
    if (!this.state.event) {
      return <PreLoader />;
    } else
      return (
        <div id="event-overlay">
          <div className="event-container">
            <img
              className="event-image"
              src={`/images/events/${this.backgroundParser(
                this.state.event.eventName
              )}`}
              alt=""
            />
            <p className="event-name">{this.state.event.eventName}</p>
            <p className="event-venue">Venue: {this.state.event.eventVenue}</p>
            <p className="event-description">
              {this.state.event.eventDescription}
            </p>
            <p className="event-contact">
              Contact:
              <br />
              {this.state.event.eventHead}
              <br />
              {this.state.event.eventHeadContact}
            </p>
            {this.renderRegBtn(this.state.event.eventRegLink)}
          </div>
        </div>
      );
  }
}

export default EventDetail;
