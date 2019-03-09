import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/database";

class EventCat extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false, events: false };
  }

  handleRedirect(e) {
    this.setState({ redirect: e });
  }

  nameParser = name => name.split(":")[0];
  backgroundParser = name =>
    name
      .split("'")
      .join("")
      .split(":")[0]
      .trim()
      .toLowerCase() + "-min.jpg";

  componentDidMount() {
    const { eventCat } = this.props.match.params;

    firebase
      .database()
      .ref("events")
      .orderByChild("eventType")
      .equalTo(eventCat)
      .on("value", snap => {
        this.setState({ events: snap.val() });
      });
  }

  render() {
    if (this.state.redirect) {
      const { redirect } = this.state;
      this.setState({ redirect: false });
      return (
        <Redirect
          push
          to={`/events/${this.props.match.params.eventCat}/${redirect}`}
        />
      );
    } else
      return (
        <div id="events-overlay">
          <div id="events-container">
            {Object.keys(this.state.events).map(id => (
              <div
                className="events-event"
                key={this.state.events[id].eventName}
                style={{
                  background: `linear-gradient(0deg,rgba(0,0,0,.53),rgba(0,0,0,.53)), url('/images/events/${this.backgroundParser(
                    this.state.events[id].eventName
                  )}`,
                  backgroundSize: "cover"
                }}
                onClick={this.handleRedirect.bind(
                  this,
                  this.nameParser(this.state.events[id].eventName)
                )}
              >
                {this.nameParser(this.state.events[id].eventName)}
              </div>
            ))}
          </div>
        </div>
      );
  }
}

export default EventCat;
