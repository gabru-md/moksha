import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Event from "./pages/Event";
import EventCat from "./pages/EventCat";
import EventDetail from './pages/EventDetail';
import Contact from "./pages/Contact";
import Sponsors from "./pages/Sponsors";
import "./pages/Home.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Navbar />
            <div id="bg-img">
              <Route exact path="/" component={Home} />
              <Route exact path="/events" component={Event} />
              <Route exact path="/events/:eventCat" component={EventCat} />
              <Route exact path="/events/:eventCat/:eventName" component={EventDetail} />
              <Route path="/contact" component={Contact} />
              <Route path="/sponsors" component={Sponsors} />
            </div>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
