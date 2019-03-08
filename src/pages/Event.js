import React, { Component } from "react";
import "./Event.css";
import { Link } from "react-router-dom";

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

    // this.changeRoute = this.changeRoute.bind(this);
  }

  // changeRoute(cat) {
  //   this.context.router.push(`/events/${cat}`);
  // }

  render() {
    return (
      <div id="events-overlay">
        <div id="events-container">
          {categories.map(category => (
            // <Link style={{ display: "block" }} to={`/events/${category.cat}`}>
              <div
                className="events-event"
                key={category.cat}
                style={{
                  background: `linear-gradient(0deg,rgba(0,0,0,.53),rgba(0,0,0,.53)), url('/images/event-cat/${
                    category.cat
                  }.jpg')`,
                  backgroundSize: "cover"
                }}
                // onClick={this.changeRoute(category.cat)}
              >
                {category.name}
              </div>
            // </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Event;
