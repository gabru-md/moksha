import React, { Component } from "react";
import "./Event.css";
import { Redirect } from "react-router-dom";

const categories = [
  {
    name: "Pronite",
    cat: "pronite"
  },
  {
    name: "Music",
    cat: "music"
  },
  {
    name: "Dance",
    cat: "dance"
  },
  {
    name: "Dramatics",
    cat: "theatre"
  },
  {
    name: "Gaming",
    cat: "gaming"
  },
  {
    name: "Photography",
    cat: "photography"
  },
  {
    name: "Literary",
    cat: "literary"
  },
  {
    name: "Talent",
    cat: "talent"
  },
  {
    name: "Informal",
    cat: "informal"
  },
  {
    name: "Automobile",
    cat: "automobile"
  }
];

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = { redirect: false };
  }

  handleRedirect(cat) {
    this.setState({ redirect: cat });
  }

  render() {
    if (this.state.redirect) {
      const { redirect } = this.state;
      this.setState({ redirect: false });
      return <Redirect push to={`/events/${redirect}`} />;
    } else
      return (
        <div id="events-overlay">
          <div id="events-container">
            {categories.map(category => (
              <div
                className="events-event"
                key={category.cat}
                style={{
                  background: `linear-gradient(0deg,rgba(0,0,0,.53),rgba(0,0,0,.53)), url('/images/event-cat/${
                    category.cat
                  }.jpg')`,
                  backgroundSize: "cover"
                }}
                onClick={this.handleRedirect.bind(this, category.cat)}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
      );
  }
}

export default Event;
